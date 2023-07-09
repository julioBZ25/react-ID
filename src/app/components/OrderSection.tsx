import { styled } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store/config/hooks.ts";
import { cancelOrder, completeOrder } from "../../store/order/orderSlice.ts";

const OrdersWrapper = styled.div`
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: repeat(2, auto);
  row-gap: 2rem;
  height: 600px;
`;

const OrderCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 1rem;
  border-radius: 1rem;
  width: 150px;
  height: 250px;
  color: #2f3538;
  background-color: white;
  p {
    text-align: right;
  }
  border: 1px solid black;
  box-shadow: -1px 9px 17px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 9px 17px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 9px 17px 0px rgba(0, 0, 0, 0.75);
`;

const OrderContent = styled.div`
  overflow: auto;
  height: 150px;
`;

const SubtitleP = styled.p`
  font-weight: bold;
`;

const HeaderProducts = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  gap: 1.5rem;
  hr {
    height: 10px;
    border: 2px solid black;
  }
`;

const ContentProducts = styled.div`
  display: flex;
  gap: 1.5rem;
  border-bottom: 1px solid black;
  margin-bottom: 0.25rem;
  .product {
    overflow-wrap: break-word;
    max-width: 100px;
    font-size: 14px;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const ActionButton = styled.button<{ $type: string }>`
  font-size: 0.85rem;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  background-color: ${(props) => {
    return props.$type === "complete" ? "#00CC66" : "#FF6B6B";
  }};
  &:hover {
    background-color: ${(props) => {
      return props.$type === "complete" ? "#008000" : "#FF0000";
    }};
  }
  &:disabled {
    background-color: gray;
    color: black;
    cursor: not-allowed;
  }
`;

const CardStatusHeader = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 0.5rem;
  span {
    font-size: 0.9rem;
  }
`;

const Status = styled.span<{ $complete?: boolean }>`
  color: ${(props) => (props.$complete ? "#00B140" : "#FFA500")};
`;

const OrderSection = () => {
  const orders = useAppSelector((state) => state.orders.sortBy);
  const dispatch = useAppDispatch();

  return (
    <OrdersWrapper>
      {orders.map((order, id) => (
        <OrderCard key={order.id}>
          <CardStatusHeader>
            {order.complete ? (
              <Status $complete={order.complete}>Completed</Status>
            ) : (
              <Status>In progress</Status>
            )}
            <span>Order: {id + 1}</span>
          </CardStatusHeader>
          <HeaderProducts>
            <SubtitleP>Q</SubtitleP>
            <SubtitleP>Product</SubtitleP>
          </HeaderProducts>
          <OrderContent>
            {order.products.map((product) => (
              <ContentProducts>
                <span>{product.quantity}</span>
                <span className="product">{product.product}</span>
              </ContentProducts>
            ))}
          </OrderContent>
          <ActionButtons>
            <ActionButton
              $type="complete"
              disabled={order.complete}
              onClick={() => {
                dispatch(completeOrder(order.id));
              }}
            >
              Complete
            </ActionButton>
            <ActionButton
              $type="cancel"
              disabled={order.complete}
              onClick={() => {
                dispatch(cancelOrder(order.id));
              }}
            >
              Cancel
            </ActionButton>
          </ActionButtons>
        </OrderCard>
      ))}
    </OrdersWrapper>
  );
};

export default OrderSection;
