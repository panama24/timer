import {
  WORKOUT_COPY,
  PRE_WORKOUT_COPY,
  POST_WORKOUT_COPY,
  DONE
} from "./constants";

export const generateDisplay = ({
  class_start_offset,
  class_end_offset,
  class_workout_offset,
  currentTimer,
  segments,
  segmentIndex,
  stopTimer,
  updateSegment
}) => {
  const hasEnded = currentTimer >= class_end_offset;
  const isPreWorkout = currentTimer < class_start_offset;
  const isPostWorkout = currentTimer >= class_workout_offset;

  if (hasEnded) {
    stopTimer();
    return {
      time: null,
      display: DONE
    };
  } else if (isPreWorkout) {
    return {
      time: class_start_offset - currentTimer,
      display: PRE_WORKOUT_COPY
    };
  } else if (isPostWorkout) {
    return {
      time: class_end_offset - currentTimer,
      display: POST_WORKOUT_COPY
    };
  } else {
    let segment;
    const currentCountdown = class_workout_offset - currentTimer;
    const prev = segments.slice(0, segmentIndex).reduce((a, c) => {
      a += c.length;
      return a;
    }, 0);
    const segmentTime =
      class_workout_offset -
      class_start_offset -
      (segments[segmentIndex].length + prev);
    if (currentCountdown > segmentTime) {
      segment = segments[segmentIndex].name;
    } else {
      updateSegment();
    }

    return {
      time: class_workout_offset - currentTimer,
      display: WORKOUT_COPY,
      segment
    };
  }
};

