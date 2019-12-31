export default function sketch(p){
    let planets = [];

    p.setup = () => {
      p.createCanvas(800, 800);
    }

    p.draw = () => {
      p.background(51);
      p.translate(p.width / 2, p.height / 2);
      p.fill(255, 204, 0)
      p.noStroke();
      p.ellipse(0, 0, 45, 45)
    }

    // p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    //   if(canvas) //Make sure the canvas has been created
    //     p.fill(newProps.color);
    // }
}