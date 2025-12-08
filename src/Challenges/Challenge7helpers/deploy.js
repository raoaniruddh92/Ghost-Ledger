import { Challenges7abi as abi, Challenges7bytecode as bytecode } from "../abi";
import { BrowserProvider, ContractFactory, parseEther } from "ethers";

export async function deploy_contract() {
    if (!window.ethereum) {
        throw new Error("MetaMask or other Ethereum provider not found.");
    }

    const provider = new BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();

    const factory = new ContractFactory(abi, bytecode, signer);
    console.log("Attempting to deploy contract...");

    const contract = await factory.deploy(
        signer.address,                      // constructor parameter _player
        { value: parseEther("0.001") }           // required msg.value
    );

    console.log("Deployment transaction sent. Waiting for confirmation...");
    await contract.waitForDeployment();

    console.log("✅ Contract deployed successfully!");
    const address = await contract.getAddress();
    console.log("Contract Address:", address);

    localStorage.setItem("current_challenge", address);
    return address;
}
