// test/Box.test.js

// Load dependencies
const { accounts, contract } = require('@openzeppelin/test-environment');
const { expect } = require('chai');

// Load compiled artifacts
const Box = contract.fromArtifact('Box');

// Start test block
describe('Box', function () {
  const [ owner ] = accounts;

  beforeEach(async function () {
    // Deploy a new Box contract for each test
    this.contract = await Box.new({ from: owner });
    console.log(owner);
  });

  // Test case
  it('retrieve returns a value 42 previously stored', async function () {
    // Store a value - recall that only the owner account can do this!
    await this.contract.store(42, { from: owner });

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await this.contract.retrieve()).toString()).to.equal('42');
  });

    // Test case 2
    it('retrieve returns a value 58 previously stored', async function () {
        // Store a value - recall that only the owner account can do this!
        await this.contract.store(58, { from: owner });
    
        // Test if the returned value is the same one
        // Note that we need to use strings to compare the 256 bit integers
        expect((await this.contract.retrieve()).toString()).to.equal('58');
      });
});