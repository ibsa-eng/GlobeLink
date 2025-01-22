const SidebarForm = () => (
  <div className="border p-4 rounded">
    <form>
      <label className="block mb-2">
        Name <span className="text-red-500">*</span>
        <input type="text" className="border rounded w-full p-2" />
      </label>
      <label className="block mb-2">
        Email <span className="text-red-500">*</span>
        <input type="email" className="border rounded w-full p-2" />
      </label>
      <button
        type="submit"
        className="bg-blue-500 text-white w-full p-2 rounded"
      >
        Submit
      </button>
    </form>
  </div>
);
