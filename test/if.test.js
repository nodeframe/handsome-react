import 'jsdom-global/register';
import React from 'react';
import {expect} from 'chai';
import {If,Else,Elif,Then} from '../src';
import { mount } from 'enzyme';


describe("If features",function(){

  describe("<If /> element with true condition",function(){
    it("should render the child element of <Then />",function(){
      const wrapper = mount(
        <If condition={true}>
          <Then>
            <div>Then</div>
          </Then>
          <Elif condition={true}>
            <div>Else if 1</div>
          </Elif>
          <Elif condition={true}>
            <div>Else if 2</div>
          </Elif>
          <Else>
            <div>Else</div>
          </Else>
        </If>
      )
      expect(wrapper.containsMatchingElement(<div>Then</div>)).to.equal(true)
      expect(wrapper.containsMatchingElement(<div>Else</div>)).to.equal(false)
      expect(wrapper.containsMatchingElement(<div>Else if 1</div>)).to.equal(false)
      expect(wrapper.containsMatchingElement(<div>Else if 2</div>)).to.equal(false)
    })

    it("should render the child element inside when without Then",function(){
      const wrapper = mount(
        <If condition={true}>
          <div>Child</div>
        </If>
      )
      expect(wrapper.containsMatchingElement(<div>Child</div>)).to.equal(true)
    })
  
  })

  describe("<If /> element with false condition",function(){

    it("should render the child element of <Else />",function(){
      const wrapper = mount(
        <If condition={false}>
          <Then><div>Then</div></Then>
          <Else><div>Else</div></Else>
        </If>
      )
      expect(wrapper.containsMatchingElement(<div>Then</div>)).to.equal(false)
      expect(wrapper.containsMatchingElement(<div>Else</div>)).to.equal(true)
    })
    
    it("should render correct elif",function(){

      const wrapper = mount (
        <If condition={false}>
          <Then><div>Then</div></Then>
          <Elif condition={false}><div>Elif 1</div></Elif>
          <Elif condition={true}><div>Elif 2</div></Elif>
          <Elif condition={false}><div>Elif 3</div></Elif>
          <Else><div>Else</div></Else>
        </If>
      )
      expect(wrapper.containsMatchingElement(<div>Then</div>)).to.equal(false)
      expect(wrapper.containsMatchingElement(<div>Elif 1</div>)).to.equal(false)
      expect(wrapper.containsMatchingElement(<div>Elif 2</div>)).to.equal(true)
      expect(wrapper.containsMatchingElement(<div>Elif 3</div>)).to.equal(false)
      expect(wrapper.containsMatchingElement(<div>Else</div>)).to.equal(false)
    })
  
  })

  
})