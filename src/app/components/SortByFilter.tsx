import { styled } from "styled-components";
import { useAppDispatch } from "../../store/config/hooks";
import { allOrders, sortByOrders } from "../../store/order/orderSlice";

const SortBySelect = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  select {
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
  }
`;

const SortByFilter = () => {
  const dispatch = useAppDispatch();
  return (
    <SortBySelect>
      Sort By:
      <select
        name="sortBy"
        defaultValue={"All"}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          if (e.target.value === "All") {
            dispatch(allOrders());
          } else if (e.target.value === "complete") {
            dispatch(sortByOrders(true));
          } else {
            dispatch(sortByOrders(false));
          }
        }}
      >
        <option value="All">All</option>
        <option value="complete">Complete</option>
        <option value="Pending">Pending</option>
      </select>
    </SortBySelect>
  );
};

export default SortByFilter;
