import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TEST_IMAGES from "./_testCommon.js";
import Card from "./Card";


//SMOKE TEST

it('it renders without crashing', () => {
    render(<Card />);
});

//SNAPSHOT TEST

it("matches snapshot", function(){
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
});
