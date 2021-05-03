import React from "react";
import Search from "./Search";
import Enzyme, {mount} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
    
});

describe("Search", () => {
    
    describe("handleKeyDown", () => {
        
        xit('should allow numbers into the text field', (done) => {
            wrapper = mount(<Search />);
            let eventObj = {
                key: 'e',
                preventDefault: jest.fn()
            };
            let field = wrapper.find('input');
            field.simulate('keyDown', eventObj);
            expect(eventObj.preventDefault).toHaveBeenCalled();
            done();
        });
        
    });
    
});