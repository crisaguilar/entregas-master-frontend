import * as service from "./averageService";
import "./styles.css";

const scores = [90, 75, 60, 99, 94, 30];
const averageScore = service.getAvg(scores);
const messageToDisplay = `average score ${averageScore}`;

document.write(messageToDisplay);
