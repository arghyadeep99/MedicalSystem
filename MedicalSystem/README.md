# Medical Records
A sample patient medical record smart contract built using Ethereum, Solidity, Truffle, Ganache-CLI and Metamask.

## System Requirements
Ganache-CLI Client
MetaMask Chrome Addin 
Solidity
Truffle

## Please follow the steps to run this project on your local machine.

1. Download the Medical records smart contract from github at the following url >> https://github.com/mvjlipinski/MedicalSystem.

2. Open a terminal window e.g. Powershell.

3. Change to the Medical_Records sub directory by entering the following command in the terminal window:
   #### cd MedicalSystem

4. Compile the Truffle project by entering the following command in the terminal window:
   #### truffle compile

5. Install the project dependancies by entering the following in the terminal window
   #### npm install

6. Open the Ganache-CLI client.  

7. Copy the mnemonic seed pharase in the Ganache-CLI client window to the clipboard.

8. Migrate the smart contract by entering the following command in the terminal window:
   #### truffle migrate --reset

9. Run the development server and type in the following command in the terminal window:
   #### npm run dev

10.The medical records system will launch and display in the browser.
  
11.To use the system, launch MetaMask and set the private network Custom RPC to the following url >> http://127.0.0.0:7545. 

12.Paste the mnemonic seed phrase from Ganache-CLI when prompted, and a password of your own choice.

13.Enter in any sample patient information and click on the Add Record button.  

14.The MetaMask add-in will launch and provide a notification window and a Submit button. 

15.Click on the Submit button and the system will send the transaction.  

16.If the transaction is successful, Metamask will provide a success status windows.  

15.Please note, the browser may need a refresh for MetaMask to connect to the smart contract.  Press F5 on the keyboard to refresh.

16.The patient details will be displayed in the Patient Results area of the interface on a successful transaction.

17.Check in the Ganache-cli client and the transaction block will be incremented by each successful transaction.

18.To test the Medical smart contract, enter the following command in the terminal window:
   #### truffle test

19.The test results will be displayed in the terminal window.

## Installation Notes
If Truffle is not installed, enter the following command to install in the terminal window:
#### npm install -g truffle

To install  Ganache-CLI, type in the following command in the terminal window:
#### npm install -g ganache-cli

To download the Ganache-CLI client, visit the following website and download the client software to your local computer:
https://truffleframework.com/ganache

To install the MetaMask addin for Chrome, download the add-in at the following url:
https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en

The Medical Records system uses the lite-server for development from Truffle pet shop.

