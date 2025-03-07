import operate from './operate';

// Constantes
const ACTIONS = {
  CLEAR: 'AC',
  EQUALS: '=',
  DECIMAL: '.',
  TOGGLE_SIGN: '+/-',
};

const MAX_DIGITS = 16; // Limite raisonnable pour éviter les débordements

/**
 * Vérifie si une chaîne est un nombre
 * @param {string} item - Chaîne à vérifier
 * @returns {boolean}
 */
function isNumber(item) {
  return /^[0-9]+$/.test(item);
}

/**
 * Vérifie si un nombre a dépassé la limite de chiffres
 * @param {string} number - Nombre à vérifier
 * @returns {boolean}
 */
function isWithinLimit(number) {
  return number.replace('.', '').length <= MAX_DIGITS;
}

/**
 * Gère l'ajout d'un chiffre
 * @param {Object} obj - État actuel
 * @param {string} digit - Chiffre à ajouter
 * @returns {Object} Nouvel état
 */
function handleNumber(obj, digit) {
  const { next, operation } = obj;

  if (operation) {
    if (next) {
      const newNext = next === '0' ? digit : next + digit;
      return isWithinLimit(newNext) ? { ...obj, next: newNext } : obj;
    }
    return { ...obj, next: digit };
  }

  if (next) {
    const newNext = next === '0' ? digit : next + digit;
    return isWithinLimit(newNext) ? { next: newNext, total: null } : obj;
  }

  return { next: digit, total: null };
}

/**
 * Gère l'ajout d'un point décimal
 * @param {Object} obj - État actuel
 * @returns {Object} Nouvel état
 */
function handleDecimal(obj) {
  const { next, operation, total } = obj;

  if (next) {
    if (next.includes('.')) return obj;
    return { ...obj, next: `${next}.` };
  }

  if (operation) {
    return { ...obj, next: '0.' };
  }

  if (total) {
    if (total.includes('.')) return obj;
    return { ...obj, next: `${total}.` };
  }

  return { ...obj, next: '0.' };
}

/**
 * Gère le changement de signe
 * @param {Object} obj - État actuel
 * @returns {Object} Nouvel état
 */
function handleSignChange(obj) {
  const { next, total } = obj;

  if (next) {
    return { ...obj, next: (-1 * parseFloat(next)).toString() };
  }
  if (total) {
    return { ...obj, total: (-1 * parseFloat(total)).toString() };
  }
  return obj;
}

/**
 * Calcule le résultat basé sur l'état actuel et le bouton pressé
 * @param {Object} obj - État actuel de la calculatrice
 * @param {string} buttonName - Nom du bouton pressé
 * @returns {Object} Nouvel état
 */
export default function calculate(obj, buttonName) {
  // Gestion des cas spéciaux
  switch (buttonName) {
    case ACTIONS.CLEAR:
      return {
        total: null,
        next: null,
        operation: null,
      };

    case ACTIONS.EQUALS:
      if (!obj.next || !obj.operation) return obj;
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };

    case ACTIONS.DECIMAL:
      return handleDecimal(obj);

    case ACTIONS.TOGGLE_SIGN:
      return handleSignChange(obj);

    default:
      // Continue avec la logique existante pour les autres cas
      break;
  }

  // Gestion des nombres
  if (isNumber(buttonName)) {
    return handleNumber(obj, buttonName);
  }

  // Gestion des opérateurs
  if (!obj.next && obj.total && !obj.operation) {
    return { ...obj, operation: buttonName };
  }

  if (obj.operation) {
    if (obj.total && !obj.next) {
      return { ...obj, operation: buttonName };
    }

    if (!obj.total) {
      return { total: 0, operation: buttonName };
    }

    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  if (!obj.next) {
    return { operation: buttonName };
  }

  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
}
