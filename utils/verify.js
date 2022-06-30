const { getContractAddress } = require("ethers/lib/utils");
const { run } = require("hardhat");

const verify = async (getContractAddress, args) => {
	console.log("Verifying contract...");

	try {
		await run("verify:verify", {
			address: getContractAddress,
			constructorArguments: args,
		});
	} catch (e) {
		if (e.message.toLowerCase().includes("already verified")) {
			console.log("Already verified");
		} else {
			console.log(e);
		}
	}
};

module.exports = { verify };
