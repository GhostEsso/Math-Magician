import Big from 'big.js';

// Constantes pour les messages d'erreur
const ERROR_MESSAGES = {
  DIVISION_BY_ZERO: 'Impossible de diviser par 0',
  MODULO_BY_ZERO: 'Impossible de calculer le modulo par 0',
  INVALID_OPERATION: (op) => `Opération '${op}' non reconnue`,
};

// Constantes pour les opérateurs
const OPERATORS = {
  ADD: '+',
  SUBTRACT: '-',
  MULTIPLY: 'x',
  DIVIDE: '÷',
  MODULO: '%',
};

/**
 * Effectue une opération mathématique entre deux nombres
 * @param {string} numberOne - Premier nombre
 * @param {string} numberTwo - Deuxième nombre
 * @param {string} operation - Opération à effectuer (+, -, x, ÷, %)
 * @returns {string} - Résultat de l'opération
 * @throws {Error} - Si l'opération n'est pas reconnue
 */
export default function operate(numberOne, numberTwo, operation) {
  try {
    const one = Big(numberOne || '0');
    const two = Big(numberTwo || '0');

    switch (operation) {
      case OPERATORS.ADD:
        return one.plus(two).toString();

      case OPERATORS.SUBTRACT:
        return one.minus(two).toString();

      case OPERATORS.MULTIPLY:
        return one.times(two).toString();

      case OPERATORS.DIVIDE:
        if (two.eq(0)) {
          return ERROR_MESSAGES.DIVISION_BY_ZERO;
        }
        return one.div(two).toString();

      case OPERATORS.MODULO:
        if (two.eq(0)) {
          return ERROR_MESSAGES.MODULO_BY_ZERO;
        }
        return one.mod(two).toString();

      default:
        throw new Error(ERROR_MESSAGES.INVALID_OPERATION(operation));
    }
  } catch (error) {
    if (error.message.includes('Invalid operation')) {
      throw error;
    }
    // Pour les erreurs de parsing ou autres erreurs inattendues
    return 'Erreur de calcul';
  }
}
