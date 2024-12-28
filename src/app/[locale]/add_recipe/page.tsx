import { ReturnToHomepage } from "@/components/controls/buttons/ReturnToHomepage";
import classNames from "classnames";

const AddRecipe = () => {
  return (
    <div className={classNames("p-96")}>
      <ReturnToHomepage
        weight="50px"
        height="50px"
        className={classNames("text-cold-grey600 text-4xl")}
      />
    </div>
  );
};

export default AddRecipe;
