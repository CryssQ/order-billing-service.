
// Розрахунок вартості доставки
// Data Coupling: передаємо тільки потрібні параметри
function calculateDeliveryCost(city, weightKg) {
    let baseRate;

    if (city === "Ivano-Frankivsk") {
        baseRate = 50.0;
    } else {
        baseRate = 110.0;
    }

    return baseRate + (weightKg * 12.0);
}

// Стандартний рахунок із податком
function processStandardInvoice(amount, city, weightKg, taxRate = 0.20) {
    const delivery = calculateDeliveryCost(city, weightKg);
    const total = (amount * (1 + taxRate)) + delivery;

    return {
        status: "PROCESSED",
        total: Number(total.toFixed(2))
    };
}

// Рахунок без податку
function processTaxExemptInvoice(amount, city, weightKg) {
    const delivery = calculateDeliveryCost(city, weightKg);
    const total = amount + delivery;

    return {
        status: "TAX_EXEMPT",
        total: Number(total.toFixed(2))
    };
}

module.exports = {
    calculateDeliveryCost,
    processStandardInvoice,
    processTaxExemptInvoice
};
