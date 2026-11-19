
// Дефект 1: Common Coupling
let GLOBAL_TAX_RATE = 0.20;

// Дефект 2: Stamp Coupling
function calculateDeliveryCost(customerProfile, weightKg) {
    const baseRate =
        customerProfile.city === "Ivano-Frankivsk" ? 50.0 : 110.0;

    return baseRate + (weightKg * 12.0);
}

// Дефект 3: Control Coupling
function processInvoice(amount, customerProfile, weightKg, modeFlag) {
    if (modeFlag === 1) {
        const delivery = calculateDeliveryCost(customerProfile, weightKg);
        const total = (amount * (1 + GLOBAL_TAX_RATE)) + delivery;

        return {
            status: "PROCESSED",
            total: Number(total.toFixed(2))
        };
    } else if (modeFlag === 2) {
        GLOBAL_TAX_RATE = 0.0;

        const total = amount + calculateDeliveryCost(customerProfile, weightKg);

        return {
            status: "TAX_EXEMPT",
            total: Number(total.toFixed(2))
        };
    }

    return {
        status: "CANCELLED",
        total: 0.0
    };
}

module.exports = {
    calculateDeliveryCost,
    processInvoice
};
