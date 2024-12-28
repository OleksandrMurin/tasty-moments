import { ReturnToHomepage } from "@/components/controls/buttons/ReturnToHomepage";

const page = async () => {
  return (
    <div className="h-full p-44 bg-orange100">
      <ReturnToHomepage />
      {/* <FavoriteRecipesSection /> */}
    </div>
  );
};

export default page;
