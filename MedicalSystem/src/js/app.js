App = {
    web3Provider: null,
    contracts: {},
  
    init: function() {
      return App.initWeb3();
    },
  
    // Instance Web3
    initWeb3: function() {
      // Is there an injected web3 instance?
      if (typeof web3 !== 'undefined') {
        App.web3Provider = web3.currentProvider;
      } else {
        // If no injected web3 instance is detected, fall back to Ganache
        // Only useful in a development environment
        App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      }
      web3 = new Web3(App.web3Provider);
      return App.initContract();
    },

    // Instance contract
  initContract: function() {
    $.getJSON('Medical.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract
      App.contracts.Medical = TruffleContract(data);
      // Set the provider for our contract
      App.contracts.Medical.setProvider(App.web3Provider);
      // Use our contract to retrieve value data
      App.getPatients();
    });
    return App.bindEvents();
  },

  bindEvents: function() {

    $(document).on('click', '.btn-value', function(e){
      var $this = $(this);
      $this.button('loading');
      App.handleAddPatient(e);
    });

  },

  getPatients: function() {
    var proposalsInstance;
    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
      var account = accounts[0];
      App.contracts.Medical.deployed().then(function(instance) {
        proposalsInstance = instance;
        proposalsInstance.getNumPatients.call().then(function(numProposals) {
          var wrapperProposals = $('#wrapperProposals');
          wrapperProposals.empty();
          var proposalTemplate = $('#proposalTemplate');
          for (var i=0; i<numProposals; i++) {
            proposalsInstance.getPatient.call(i).then(function(data) {
              var idx = data[0];
              proposalTemplate.find('.admissionNo').text(data[1]);
              proposalTemplate.find('.patientName').text(data[2]);
              proposalTemplate.find('.hospital').text(data[3]);
              proposalTemplate.find('.doctor').text(data[4]);
              proposalTemplate.find('.prescription').text(data[5]);
     
              wrapperProposals.append(proposalTemplate.html());
            }).catch(function(err) {
              console.log(err.message);
            });
          }
        }).catch(function(err) {
          console.log(err.message);
        });
      });
    });
    $('button').button('reset');
  },

  handleAddPatient: function(event) {
    event.preventDefault();
    var proposalInstance;
    var value1 = $('.input-value1').val();
    var value2 = $('.input-value2').val();
    var value3 = $('.input-value3').val();
    var value4 = $('.input-value4').val();
    var value5 = $('.input-value5').val();

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
      var account = accounts[0];
      App.contracts.Medical.deployed().then(function(instance) {
        proposalInstance = instance;
        return proposalInstance.addPatient(value1, value2, value3, value4, value5, {from: account});
      }).then(function(result) {
        var event = proposalInstance.CreatedPatientEvent();
        App.handleEvent(event);
        $('.input-value1').val(''); // clean input
        $('.input-value2').val(''); // clean input
        $('.input-value3').val(''); // clean input
        $('.input-value4').val(''); // clean input
        $('.input-value5').val(''); // clean input
      }).catch(function(err) {
        console.log(err.message);
        $('button').button('reset');
      });
    });
  },

  handleAddVote: function(event) {
    event.preventDefault();
    var voteInstance;
    var voteValue = parseInt($(event.target).data('vote'));
    var proposalInt = parseInt($(event.target).data('proposal'));
    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }
      var account = accounts[0];
      App.contracts.Medical.deployed().then(function(instance) {
        voteInstance = instance;
        return voteInstance.vote(proposalInt, voteValue, {from: account});
      }).then(function(result) {
        var event = voteInstance.CreatedVoteEvent();
        App.handleEvent(event);
      }).catch(function(err) {
        console.log(err.message);
        $('button').button('reset');
      });
    });
  },

  handleEvent: function(event) {
    console.log('Waiting for a event...');
    event.watch(function(error, result) {
      if (!error) {
        App.getPatients();
      } else {
        console.log(error);
      }
      event.stopWatching();
    });
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});