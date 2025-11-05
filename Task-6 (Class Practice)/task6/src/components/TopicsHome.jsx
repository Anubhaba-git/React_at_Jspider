import React from 'react'
import PropsH from './props/PropsH'
import HooksHome from './hooks/HooksHome'
import ConditionalRendering from './conditionalRendering/ConditionalRendering'
import UseRefHook from './hooks/useRefHook/UseRefHook'
import UseEffecctHook from './hooks/UseEffectHook/UseEffecctHook'
import FormHome from './Form Handeling/FormHome'
import SpecialCase from './SpecialCases/SpecialCase'
import InlineCss from './CssInReact/InlineCss/InlineCss'
import GlobalCss from './CssInReact/GlobalCss/GlobalCss'
import ModuleCss from './CssInReact/ModuleCss/ModuleCss'
import ImageAndIcons from './ImageAndIcons/ImageAndIcons'
import FetchMethod from './FetchMethod/FetchMethod'
import TableTask from './FetchMethod/Tasks/TableTask'
import ContextAPIHome from './ContextAPI/ContextAPIHome'
import UseReducerHook from './hooks/UseReducerHook/UseReducerHook'
import CustomHook from './hooks/CostumeHook/CustomHook'
import ReactMemory from './hooks/ReactMemo/ReactMemory'
import UseMemoHook from './hooks/UseMemoHook/UseMemoHook'
import UseCallbackHook from './hooks/UseCallbackHook/UseCallbackHook'


const TopicsHome = () => {
  return (
    <div>
      {/* Props in React  */}
      {/* <PropsH/> */}

      {/* Hooks in react  */}
      {/* <HooksHome/> */}

      {/* Conditional rendering  */}
      {/* <ConditionalRendering/> */}

      {/* useRef hook  */}
      {/* <UseRefHook/> */}

      {/* use Effect hook  */}
      {/* <UseEffecctHook/> */}

      {/* Form Handeling in React js  */}
      {/* <FormHome/> */}

      {/* Specialcases  */}
      {/* <SpecialCase/> */}

      {/* Css in React js  */}
      {/* <InlineCss/>
      <GlobalCss/>
      <ModuleCss/> */}

      {/* How to load iamges and icons in react js. */}
      {/* <ImageAndIcons/> */}

      {/* Handle the API requests  */}
      <FetchMethod/>

      {/* Create a dynamic table from fetch data */}
      {/* <TableTask/> */}

      {/* Context API  */}
      {/* <ContextAPIHome/> */}

      {/* UseReducer Hook in react js  */}
      {/* <UseReducerHook/> */}

      {/* Costume Hook  */}
      {/* <CustomHook/> */}

      {/* React Memo  */}
      {/* <ReactMemory/> */}

      {/* UseMemo Hook  */}
      {/* <UseMemoHook/> */}

      {/* UseCallback Hook  */}
      {/* <UseCallbackHook/> */}
    </div>
  )
}

export default TopicsHome
