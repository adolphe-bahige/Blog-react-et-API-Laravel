import Title from "../../components/Titles";

function Settings() {
  return (
    <>
      <Title className="flex justify-between ">
        <h1 className="text-lg font-medium">Settings</h1>
      </Title>

      {/* content */}
      <div className="w-full min-h-[74vh] p-2 flex justify-center items-center gap-2 rounded-md dark:bg-slate-800 transition-colors">
        <p className="text-white font-medium">Content Later</p>
      </div>
    </>
  );
}

export default Settings;
