import React, { useEffect, useState, } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

// function CustomBlock({ todos }) {
//     const [globalCounter, setGlobalCounter] = useState(0)
//     console.log("CUSTOM_BLOCK_RENDERED_OUTSIDE_PARENT_COMP")
//     const accordionItems = useSelector((state) => state.accordionReducer.todos);
//     console.log('%caccordionItems_CUSTOM_BLOCK', 'color:red', accordionItems)



//     const calculate = () => {
//         let counter = 0
//         for (let i = 0; i < 100; i++) {
//             counter++
//             console.log('counter=>', counter)
//         }
//         return counter
//     }



//     return (
//         <div>
//             GLOBAL COUNTER:{globalCounter}
//         </div>
//     )
// }

// export default CustomBlock;


// *Example2
function CustomBlock({ todos }) {
    const [globalCounter, setGlobalCounter] = useState(0)
    console.log("%cCUSTOM_BLOCK_RENDERED_OUTSIDE_PARENT_COMP", "color:pink")
    // const accordionItems = useSelector((state) => state.accordionReducer.todos)
    // console.log('%caccordionItems_CUSTOM_BLOCK', 'color:red', accordionItems)
    console.log("connected_props", todos)


    const calculate = () => {
        let counter = 0
        for (let i = 0; i < 100; i++) {
            counter++
            console.log('counter=>', counter)
        }
        return counter
    }



    return (
        <div>
            GLOBAL COUNTER:{globalCounter}
        </div>
    )
}

const mapStateToProps = (state) => ({ todos: state.accordionReducer.todos })


export default connect(mapStateToProps)(CustomBlock)
