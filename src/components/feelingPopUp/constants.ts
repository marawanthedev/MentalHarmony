import sadIcon from "assets/images/loudly-crying-face.webp";
import unsureIcon from "assets/images/neutral-face.webp";
import goodIcon from "assets/images/smiling-face-with-smiling-eyes.webp";
import happyIcon from "assets/images/happy-face-with-enlarged-eyes.webp";
import { IFeeling } from "constants/Feeling";

export const feelingsList: IFeeling[] = [
  {
    icon: sadIcon,
    text: "Sad",
  },
  {
    icon: unsureIcon,
    text: "Unsure",
  },
  {
    icon: goodIcon,
    text: "Good",
  },
  {
    icon: happyIcon,
    text: "Happy",
  },
];
