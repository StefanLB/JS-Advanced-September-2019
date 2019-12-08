function solve(steps, footprint, speed){
    let minuteBreak = 60;
    let speedMsec = speed/3.6;
    let time = (steps*footprint)/speedMsec + Math.floor((steps*footprint)/500)*60;

    let h = Math.floor(time/3600) > 9 ? "" + Math.floor(time/3600): "0" + Math.floor(time/3600);
    let m = Math.floor((time%3600)/60) > 9 ? "" + Math.floor((time%3600)/60): "0" + Math.floor((time%3600)/60);
    let s = ((time%3600)%60).toFixed(0) > 9 ? "" + ((time%3600)%60).toFixed(0): "0" + ((time%3600)%60).toFixed(0);

    console.log(`${h}:${m}:${s}`)
}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);