//login.spec.js
 
const assert = require('assert');
const LoginPage = require ('../pages/login.page');
const AddRoom = require ('../pages/addRoom.page');

const url = 'https://automationintesting.online/#/admin';

describe('Exercise 1 – UI Automation', () => {
 
    it('I should open the main URL and verify the title', async () => {
		await browser.url(url);
		const title = await browser.getTitle();
		await assert.strictEqual(title , 'Restful-booker-platform demo'); 
    });

    it('It should deny access with wrong creds’' , async () => {
		await LoginPage.open(url);
		await LoginPage.login('admin','wrongpass');
		
		await browser.pause(500);
		await assert.equal('Log into your account' , await $('h2').getText());
		await assert.equal(false , await $('#roomName101').isDisplayed());
    });
   
    it('I enter valid username and password and login successfully' , async () => {
		await LoginPage.open(url);
		await LoginPage.login('admin','password');
		
		await browser.pause(500);

		// Do some assertions to make sure we're connected
		await assert.equal('Create' , await $('#createRoom').getText());
		await assert.equal(true , await $('#createRoom').isDisplayed());
		await assert.equal(true , await $('#roomName101').isDisplayed());
		await assert.equal('B&B Booking Management' , await $('a.navbar-brand').getText());
    });


    it('I added a valid new second room' , async () => {
		await AddRoom.add(102, 200,'Family', 'true');
		
		await browser.pause(500);
		// Do some assertions to make sure we have added a new room successfully
		await assert.equal(true , await $('#roomName102').isDisplayed());
    });

    it('Cannot add a new room with no name' , async () => {
		await AddRoom.add('', 200,'Family', 'true');

		await browser.pause(600)
		
		// Do some assertions to make sure that the new room has not been saved
		await assert.equal(true , await $('div.alert > p').isDisplayed());
		await assert.equal('Room name must be set' , await $('div.alert > p').getText());
    });


    it('Cannot add a new room with price under to 1' , async () => {
      await AddRoom.add('103', 0,'Family', 'true');

      await browser.pause(500)
       
      // Do some assertions to make sure that the new room has not been saved
      await assert.equal(false , await $('#roomName103').isDisplayed());
      await assert.equal(true , await $('div.alert > p').isDisplayed());
      await assert.equal('doit être supérieur ou égal à 1' , await $('div.alert > p').getText());
    });
 
 
 
});