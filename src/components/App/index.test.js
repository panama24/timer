import React from 'react';
import { mount } from 'enzyme';
import App from './';


describe('App', () => {
  let timeline, wrapper;
  beforeEach(() => {
    timeline = {
      class_start_offset: 5,
      class_workout_offset: 29,
      class_end_offset: 33,
      segments: [
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
      ]
    };
    wrapper = mount(<App timeline={timeline} />);
  });

  describe('componentDidMount', () => {
    it('should call startTimer', () => {
      const instance = wrapper.instance();
      jest.spyOn(instance, 'startTimer');
      instance.componentDidMount();
      expect(instance.startTimer).toHaveBeenCalledTimes(1);
    });
  });

  describe('startTimer', () => {
    it('should call setInterval', () => {
      jest.useFakeTimers();
      expect(wrapper.state('currentTimer')).toEqual(0);
      wrapper.instance().startTimer();
      jest.advanceTimersByTime(2000);
      expect(setInterval).toHaveBeenCalledTimes(1);
      expect(wrapper.state('currentTimer')).toEqual(2);
      jest.useRealTimers();
    });
  });

  describe('stopTimer', () => {
    it('should call clearInterval', () => {
      jest.useFakeTimers();
      wrapper.instance().stopTimer();
      expect(clearInterval).toHaveBeenCalledTimes(1);
      jest.useRealTimers();
    });
  });

  describe('updateSegmentIndex', () => {
    it('should update segmentIndex by 1', () => {
      wrapper.instance().updateSegmentIndex();
      expect(wrapper.state('segmentIndex')).toEqual(1);

      wrapper.instance().updateSegmentIndex();
      expect(wrapper.state('segmentIndex')).toEqual(2);
    });
  });

  describe('componentWillUnmount', () => {
    it('should call stopTimer', () => {
      const instance = wrapper.instance();
      jest.spyOn(instance, 'stopTimer');
      instance.componentWillUnmount();
      expect(instance.stopTimer).toHaveBeenCalledTimes(1);
    });
  });
});
