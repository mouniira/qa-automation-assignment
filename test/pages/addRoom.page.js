const Page = require('./page');

// Sub page containing specific selectors and methods for a specific page
class AddRoom extends Page {
    // Define selectors using getter methods
    get inputRoomName () {
        return $('#roomName');
    }

    get inputRoomPrice () {
        return $('#roomPrice');
    }

    get inputRoomType () {
        return $('#type');
    }

    get inputRoomAccessible () {
        return $('#accessible');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    // A method to encapsule automation code to add a new room
    async add (roomName, roomPrince, roomTypeValue, roomAccessibleValue) {
        await this.inputRoomName.setValue(roomName);
        await this.inputRoomPrice.setValue(roomPrince);
        await this.inputRoomType.selectByAttribute("value", roomTypeValue),
        await this.inputRoomAccessible.selectByAttribute("value", roomAccessibleValue),
        await this.btnSubmit.click();
    }

    // Overwrite specific options to adapt it to page object
    open (url) {
        return super.open(url);
    }
}

module.exports = new AddRoom();
