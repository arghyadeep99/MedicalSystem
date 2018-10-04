# Medical Records System
A sample patient medical records system smart contract built using Ethereum, Solidity, Truffle, Ganache-CLI and Metamask.

## System Requirements
Ganache-CLI Client
<br />
MetaMask Chrome Add-in 
<br />
Solidity
<br />
Truffle
<br />
Chrome Browser

## Please follow the steps to run this project on your local machine.

1. Download the Medical System smart contract from Github at the following url >> https://github.com/mvjlipinski/MedicalSystem.

2. Unzip the MedicalSystem directory to your local computer.

3. Open a terminal window e.g. Powershell.

4. Change to the MedicalSystem sub directory by entering the following command in the terminal window:
   #### cd MedicalSystem

5. Install the project dependancies by entering the following in the terminal window:
   #### npm install
   
6. Compile the Truffle project by entering the following command in the terminal window:
   #### truffle compile
   
7. Open the Ganache-CLI client.  

8. Copy the mnemonic seed phrase in the Ganache-CLI client window to the clipboard.

9. Migrate the smart contract by entering the following command in the terminal window:
   #### truffle migrate --reset
   
10. To test the smart contract, enter the following command in the terminal window:
    #### truffle test
   
11. Run the development server and type in the following command in the terminal window:
    #### npm run dev

12. The medical records system will launch and display in the browser.
  
13. To use the system, launch MetaMask add-in and set the private network Custom RPC to the following url >> http://127.0.0.0:7545. 

14. Paste the mnemonic seed phrase from Ganache-CLI when prompted, and a password of your own choice.

15. Enter in any sample patient information and click on the Add Record button.  

16. The MetaMask add-in will launch and provide a notification window and a Submit button. 

17. Click on the Submit button and the system will send the transaction.  

18. If the transaction is successful, Metamask will provide a success status window.  

19. Please note, the browser may need a refresh for MetaMask to connect to the smart contract.  Press F5 on the keyboard to refresh.

20. The patient details will be displayed in the Patient Results area of the interface on a successful transaction.

21. Check in the Ganache-cli client and the transaction block will be incremented by each successful transaction.

## Installation Notes
a. If Truffle is not installed, enter the following command to install in the terminal window:
   #### npm install -g truffle

b. To install  Ganache-CLI, type in the following command in the terminal window:
   #### npm install -g ganache-cli

c. To download the Ganache-CLI client, visit the following website and download the client software to your local computer:
   https://truffleframework.com/ganache

d. To install the MetaMask add-in for Chrome, download the add-in at the following url:
   https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en

e. The Medical Records system uses the lite-server for development from the Truffle pet shop.
