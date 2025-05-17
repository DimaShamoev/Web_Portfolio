import ExpertiseBlock from "../components/UI/expertise/ExpertiseBlock";
import ExpertiseInfiniteSlider from "../components/UI/expertise/ExpertiseInfiniteSlider";
import ExpertiseBars from "./ExpertiseBar";

const Expertise: React.FunctionComponent = () => {
    return (
        <div className="sm-box-padding overflow-hidden">
            <ExpertiseBars />
            <ExpertiseInfiniteSlider />
            <ExpertiseBlock />
        </div>
    );
};

export default Expertise;
