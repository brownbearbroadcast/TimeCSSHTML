class DropFrame {
    frames;
    seconds;
    minutes;
    hours;
    framerate;




    //constructor that allows for dynamic insetion, 
    //meaning 00 would trigger frames, 0000 triggers 
    //seconds & frames.
    constructor(frames, seconds, minutes, hours) {
        if (frames == undefined) {
            this.frames = 0;
        }
        else {
            this.frames = frames;
        }
        if (seconds == undefined) {
            this.seconds = 0;
        }
        else {
            this.seconds = seconds;
        }
        if (minutes == undefined) {
            this.minutes = 0;
        }
        else {
            this.minutes = minutes;
        }
        if (hours == undefined) {
            this.hours = 0;
        }
        else {
            this.hours = hours;
        }

        this.framerate = 30;
    }

    //functions for dropframe
    //TODO merge  add & subtract into one equation that uses if/else for +/-

    add(addend) {

        // algebraic manipulation of EG 40 6.5.5 ; not final solution
        const startFrame = Math.floor(30 * this.seconds + 1798 * this.minutes + 2 * Math.floor(this.minutes / 10) + 107892 * this.hours + this.frames);

        const endFrame = Math.floor(30 * addend.seconds + 1798 * addend.minutes + 2 * Math.floor(addend.minutes / 10) + 107892 * addend.hours + addend.frames);
        
        let frame_count;
        // TODO: Input validation for CalculateDuration
        frame_count = endFrame + startFrame;
        const h = Math.floor(frame_count / 107892);
        let hours = h % 24;
        let minutes = Math.floor(1 / 1800.00 * (frame_count + 2 * Math.floor((frame_count - (107892 * h)) / 1800.0) - 2 * Math.floor((frame_count - (107892 * h)) / 18000.0) - 107892 * h));
        let seconds = Math.floor(1 / 30 * (frame_count - 1798 * minutes - 2 * Math.floor(minutes / 10.0) - 107892 * h));
        console.log("seconds: " + seconds);
        let frames = Math.floor(frame_count - 30 * seconds - 1798 * minutes - 2 * Math.floor(minutes / 10.0) - 107892 * h);
        if (minutes != 0 && minutes % 10 != 0 && seconds == 0) {
            switch (frames) {
                case 0:
                    seconds -= 1;
                    frames = 28;
                    break;
                case 1:
                    seconds -= 1;
                    frames = 29;
                    break;
            }
            if (seconds == -1) {
                minutes--;
                seconds = 59;
            }
            if (minutes == -1) {
                hours--;
                minutes = 59;
            }
        }
        return new DropFrame(frames, seconds, minutes, hours);
    }



     subtract(minuend) {

        // algebraic manipulation of EG 40 6.5.5
        const startFrame = Math.floor(30 * this.seconds + 1798 * this.minutes + 2 * Math.floor(this.minutes / 10) + 107892 * this.hours + this.frames);

        let endFrame = Math.floor(30 * minuend.seconds + 1798 * minuend.minutes + 2 * Math.floor(minuend.minutes / 10) + 107892 * minuend.hours + minuend.frames);

        let frame_count;
        if (startFrame < endFrame) {
        frame_count = 107892*24 - (startFrame - endFrame);
        }
        else {frame_count = startFrame - endFrame; }
        const h = Math.floor(frame_count / 107892);
        let hours = h % 24;
        let minutes = Math.floor(1 / 1800.00 * (frame_count + 2 * Math.floor((frame_count - (107892 * h)) / 1800.0) - 2 * Math.floor((frame_count - (107892 * h)) / 18000.0) - 107892 * h));
        let seconds = Math.floor(1 / 30 * (frame_count - 1798 * minutes - 2 * Math.floor(minutes / 10.0) - 107892 * h));
        console.log("seconds: " + seconds);
        let frames = Math.floor(frame_count - 30 * seconds - 1798 * minutes - 2 * Math.floor(minutes / 10.0) - 107892 * h);
        // this should be impossible to reach, will test soon.
        if (minutes != 0 && minutes % 10 != 0 && seconds == 0) {
            switch (frames) {
                case 0:
                    seconds -= 1;
                    frames = 28;
                    break;
                case 1:
                    seconds -= 1;
                    frames = 29;
                    break;
            }
            if (seconds == -1) {
                minutes--;
                seconds = 59;
            }

            if (minutes == -1) {
                hours--;
                minutes = 59;
            }
        }
        return new DropFrame(frames, seconds, minutes, hours);
    }

    duration(startTimecode, endTimecode) {

        // algebraic manipulation of EG 40 6.5.5 ; not final solution
        const startFrame = Math.floor(startTimecode.framerate * startTimecode.seconds + 1798 * startTimecode.minutes + 2 * Math.floor(startTimecode.minutes / 10) + 107892 * startTimecode.hours + startTimecode.frames);

        let endFrame = Math.floor(startTimecode.framerate * endTimecode.seconds + 1798 * endTimecode.minutes + 2 * Math.floor(endTimecode.minutes / 10) + 107892 * endTimecode.hours + endTimecode.frames);
        if (startFrame > endFrame) {
            endFrame += 107892*24;

        }
        // TODO: Input validation for CalculateDuration
        const frame_count = endFrame - startFrame;
        console.log(frame_count);
        const h = Math.floor(frame_count / 107892);
        let hours = h % 24;
        let minutes = Math.floor(1 / 1800.00 * (frame_count + 2 * Math.floor((frame_count - (107892 * h)) / 1800.0) - 2 * Math.floor((frame_count - (107892 * h)) / 18000.0) - 107892 * h));
        let seconds = Math.floor(1 / 30 * (frame_count - 1798 * minutes - 2 * Math.floor(minutes / 10.0) - 107892 * h));
        let frames = Math.floor(frame_count - 30 * seconds - 1798 * minutes - 2 * Math.floor(minutes / 10.0) - 107892 * h);
        if (minutes != 0 && minutes % 10 != 0 && seconds == 0) {
            switch (frames) {
                case 0:
                    seconds -= 1;
                    frames = 28;
                    break;
                case 1:
                    seconds -= 1;
                    frames = 29;
                    break;
            }
            if (seconds == -1) {
                minutes--;
                seconds = 29;
            }
            if (minutes == -1) {
                hours--;
                minutes = 59;
            }
        }
        return new DropFrame(frames, seconds, minutes, hours);
    }
    display() {
        let digits = new Intl.NumberFormat('en-US', {  minimumIntegerDigits: 2 });
        console.log(`${digits.format(this.hours)}:${digits.format(this.minutes)}:${digits.format(this.seconds)}:${digits.format(this.frames)}`);

    }
    string() {
        let digits = new Intl.NumberFormat('en-US', {  minimumIntegerDigits: 2 });
        return `${digits.format(this.hours)}:${digits.format(this.minutes)}:${digits.format(this.seconds)}:${digits.format(this.frames)}`;
    }
}


const start = new DropFrame(2,0,14,0);
const end = new DropFrame(2,0,15,0);
const test = start.duration(start,end);
console.log(test.string());

test.display(); 