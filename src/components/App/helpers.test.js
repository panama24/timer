import { generateDisplay } from './helpers';

describe('generateDisplay', () => {
  let class_start_offset,
    class_end_offset,
    class_workout_offset,
    currentTimer,
    segments,
    segmentIndex,
    stopTimer,
    updateSegment;
  beforeEach(() => {
    class_start_offset = 5;
    class_end_offset = 33;
    class_workout_offset = 29;
    currentTimer = 1;
    segments = [
      {
        id: "1kj38dwkj38",
        length: 6,
        name: "cycling"
      },
      {
        id: "90sdfg8sdfh",
        length: 8,
        name: "pushups"
      },
      {
        id: "32lknr9wkn",
        length: 5,
        name: "squats"
      },
      {
        id: "l2k48sdfnk",
        length: 5,
        name: "situps"
      }
    ];
    segmentIndex = 0;
    stopTimer = jest.fn();
    updateSegment = jest.fn();
  });

  describe('when timer is in the pre-workout stage', () => {
    it('should return the expected object', () => {
      const res = generateDisplay({
        class_start_offset,
        class_end_offset,
        class_workout_offset,
        currentTimer,
        segments,
        segmentIndex: 2,
        stopTimer,
        updateSegment
      });
      const expected = {
        time: 4,
        display: 'Workout starting in...',
      };
      expect(res).toEqual(expected);
    });
  });

  describe('when timer is in the post-workout stage', () => {
    it('should return the expected object', () => {
      const res = generateDisplay({
        class_start_offset,
        class_end_offset,
        class_workout_offset,
        currentTimer: 32,
        segments,
        segmentIndex,
        stopTimer,
        updateSegment
      });
      const expected = {
        time: 1,
        display: 'Cool-down ends in...',
      };
      expect(res).toEqual(expected);
    });
  });

  describe('when timer is in the workout stage', () => {
    it('should return the expected object', () => {
      const res = generateDisplay({
        class_start_offset,
        class_end_offset,
        class_workout_offset,
        currentTimer: 10,
        segments,
        segmentIndex,
        stopTimer,
        updateSegment
      });
      const expected = {
        time: 19,
        display: 'Workout ends in...',
        segment: 'cycling',
      };
      expect(res).toEqual(expected);
    });
  });

  describe('when the workout has ended', () => {
    it('should return the expected object', () => {
      const res = generateDisplay({
        class_start_offset,
        class_end_offset,
        class_workout_offset,
        currentTimer: 33,
        segments,
        segmentIndex,
        stopTimer,
        updateSegment
      });
      const expected = {
        time: null,
        display: 'Workout complete!',
      };
      expect(res).toEqual(expected);
      expect(stopTimer).toHaveBeenCalledTimes(1);
    });
  });
});
