# Medical Records System
A simple patient medical records system built using blockchain technology, smart contracts, Ethereum, Solidity, Truffle, Ganache-CLI and Metamask.

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

## Setup

Download the Medical System smart contract from Github at the following url >> https://github.com/mvjlipinski/MedicalSystem.

Unzip the MedicalSystem directory to your local computer.

Open a terminal window e.g. Powershell.

Change to the MedicalSystem sub directory by entering the following command in the terminal window:
**cd MedicalSystem**

Install the project dependancies by entering the following in the terminal window:
**npm install**
   
Compile the Truffle project by entering the following command in the terminal window:
**truffle compile**
   
Open the Ganache-CLI client.  

Copy the mnemonic seed phrase in the Ganache-CLI client window to the clipboard.

Migrate the smart contract by entering the following command in the terminal window:
**truffle migrate --reset**
   
To test the smart contract, enter the following command in the terminal window:
**truffle test**
   
Run the development server and type in the following command in the terminal window:
**npm run dev**

The medical records system will launch and display in the browser.
  
To use the system, launch MetaMask add-in and set the private network Custom RPC to the following url >> http://127.0.0.0:7545. 

Paste the mnemonic seed phrase from Ganache-CLI when prompted, and a password of your own choice.

Enter in any sample patient information and click on the Add Record button.  

The MetaMask add-in will launch and provide a notification window and a Submit button. 

Click on the Submit button and the system will send the transaction.  

If the transaction is successful, Metamask will provide a success status window.  

Please note, the browser may need a refresh for MetaMask to connect to the smart contract.  Press F5 on the keyboard to refresh.

The patient details will be displayed in the Patient Results area of the interface on a successful transaction.

Check in the Ganache-cli client and the transaction block will be incremented by each successful transaction.

## Installation Notes
If Truffle is not installed, enter the following command to install in the terminal window:  **npm install -g truffle**

To install  Ganache-CLI, type in the following command in the terminal window:   **npm install -g ganache-cli**

To download the Ganache-CLI client, visit the following website and download the client software to your local computer: **https://truffleframework.com/ganache**

To install the MetaMask add-in for Chrome, download the add-in at the following url: **https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en**
