import { useEffect } from "react";
import { useApi } from "../../components/ApiContext";

const ShowAllWorkOrders = () => {
  const { getAllWorkOrders, allWorkOrders } = useApi();

  useEffect(() => {
    setTimeout(() => {
      getAllWorkOrders();
    }, 1000);

    console.log(allWorkOrders);
  }, []);

  return (
    <article>
      <section className="px-6">
        <table className="table-auto w-full text-left">
          <thead className="text-gray-600">
            <tr className="bg-gray-200 text-sm ">
              <th className="p-1 rounded-tl">W/O Number</th>
              <th>Status</th>
              <th>Description</th>
              <th className="rounded-tr">Created At</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {allWorkOrders.length > 0 &&
              allWorkOrders?.map((workorder: any) => {
                return (
                  <tr
                    className="border-b-2 border-gray-200 hover:border-emerald-400 hover:text-emerald-600"
                    key={workorder.workOrderNumber}
                  >
                    <td>{workorder.workOrderNumber}</td>
                    <td>{workorder.status}</td>
                    <td>{workorder.notes}</td>
                    <td>{workorder.priority}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </section>
      {/* <p className="text-sm my-4">Total: {allWorkOrders?.w_o?.length}</p> */}
    </article>
  );
};
export default ShowAllWorkOrders;
