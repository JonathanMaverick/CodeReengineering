import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ChangePreventers from './ChangePreventers/ChangePreventers';
import DivergentChange from './ChangePreventers/DivergentChange';
import ShotgunSurgery from './ChangePreventers/ShotgunSurgery';
import ParallelInheritanceHierarchies from './ChangePreventers/ParallelInheritanceHierarchies';
import Dispensables from './Dispensables/Dispensables';
import Comment from './Dispensables/Comment';
import SpeculativeGenerality from './Dispensables/SpeculativeGenerality';
import DeadCode from './Dispensables/DeadCode';
import DataClass from './Dispensables/DataClass';
import LazyClass from './Dispensables/LazyClass';
import DuplicateCode from './Dispensables/DuplicateCode';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/change-preventers" element={<ChangePreventers />} />
          <Route path="/change-preventers/divergent-change" element={<DivergentChange />} />
          <Route path="/change-preventers/shotgun-surgery" element={<ShotgunSurgery />} />
          <Route path="/change-preventers/hierarcy" element={<ParallelInheritanceHierarchies />} />
          <Route path="/dispensables" element={<Dispensables />} />
          <Route path="/dispensables/comment" element={<Comment />} />
          <Route path="/dispensables/duplicate-code" element={<DuplicateCode />} />
          <Route path="/dispensables/lazy-class" element={<LazyClass />} />
          <Route path="/dispensables/data-class" element={<DataClass />} />
          <Route path="/dispensables/dead-code" element={<DeadCode />} />
          <Route path="/dispensables/speculative-generality" element={<SpeculativeGenerality />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
