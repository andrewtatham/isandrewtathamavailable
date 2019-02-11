import { DatePipe } from '@angular/common';

export class Availability {

    isAvailable: boolean;
    availabilityText: string;
    constructor(now: Date, showAvailableFrom: Date, actualAvailableFrom: Date) {

        var showAvailability = now >= showAvailableFrom;
        var availableImmediatley = now >= actualAvailableFrom;
        let datePipe = new DatePipe('en-GB');

        let availabilityText = "I'm available ";
        if (showAvailability) {
            if (availableImmediatley) {
                availabilityText += "immediately";
            }
            else {
                availabilityText += "from " + datePipe.transform(actualAvailableFrom, 'd MMMM yyyy');
            }
            availabilityText += " for contract .NET development roles, either in Leeds or working remotely."
        } else {
            //let autoDate = this.addDays(now, 30);
            //let month = datePipe.transform(autoDate, 'MMMM');
            availabilityText = "I'm not available. I'm in contract until " + datePipe.transform(actualAvailableFrom, 'd MMMM yyyy') + ". Please do not call.";
        }

        this.availabilityText = availabilityText;
        this.isAvailable = showAvailability;


    }
}