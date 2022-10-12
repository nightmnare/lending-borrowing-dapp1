const LendBorrow= artifacts.require("LendBorrowContract");
const lenderDuration = 1;
const main = async (cb) => {
    try {
        const lendBorrow = await LendBorrow.deployed();
        let user = (await web3.eth.getAccounts())[1];
        let value = 10000;
        let txn = await lendBorrow.createLender(lenderDuration, {from: user, value: value});
        console.log(txn);
        console.log(txn.logs[0].args);
        console.log(txn.logs[1].args);
    } catch(err) {
        console.log(err);
    }
    cb();
}

module.exports = main;