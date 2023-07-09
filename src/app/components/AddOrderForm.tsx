import { useState } from "react";
import { Product } from "../../store/order/interfaces";
import { useAppDispatch } from "../../store/config/hooks";
import { addOrder } from "../../store/order/orderSlice";
import { styled } from "styled-components";

const Wrapper = styled.div`
  border-radius: 1rem;
  border: 1px solid black;
  border-radius: 1rem;
  height: 100%;
  display: flex;
  padding: 0 0.5rem;
  flex-direction: column;
  gap: 0.25rem;
  color: #2f3538;
  background-color: white;
  box-shadow: -1px 9px 17px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -1px 9px 17px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 9px 17px 0px rgba(0, 0, 0, 0.75);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputProducts = styled.div`
  display: flex;
  flex-direction: row;
`;

const InputField = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  gap: 0.25rem;
  padding: 0.5rem 0;
`;

const Input = styled.input<{ $isProduct: boolean }>`
  width: ${(props) => (props.$isProduct ? "80%" : "20%")};
`;

const Title = styled.h2`
  text-align: center;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding: 0.5rem 0;
`;

const ActionButton = styled.button`
  font-size: 0.85rem;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background-color: yellow;
  &:hover {
    background-color: yellow;
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.75rem;
`;

const HeaderProducts = styled.div`
  display: flex;
  gap: 1.5rem;
  border-bottom: 1px solid black;
  margin-bottom: 0.5rem;
  span {
    font-weight: bold;
  }
`;

const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 340px;
  li {
    display: flex;
    gap: 1.5rem;
    border-bottom: 1px solid black;
    margin-bottom: 0.5rem;
    .quantity {
      font-size: 1.125rem;
      font-weight: bold;
    }
    .product {
      flex: 1;
      max-width: 150px;
      align-items: center;
      overflow-wrap: break-word;
    }
  }
`;

const ProductListContainer = styled.div`
  overflow-y: auto;
`;

const AddOrderForm = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState("");
  const [product, setProduct] = useState("");
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <Title>Add your Order</Title>
      <ContentWrapper>
        <InputProducts>
          <InputField>
            Product:
            <Input
              $isProduct={true}
              name="product"
              type="text"
              value={product}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setProduct(e.target.value)
              }
            />
          </InputField>
          <InputField>
            Quantity:
            <Input
              $isProduct={false}
              type="number"
              name="quantity"
              value={quantity}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setQuantity(e.target.value)
              }
            />
          </InputField>
        </InputProducts>
        <ActionButtons>
          <ActionButton
            onClick={() => {
              if (!product || !quantity || Number(quantity) === 0) return;
              setProducts([
                ...products,
                { quantity: Number(quantity), product },
              ]);
              setProduct("");
              setQuantity("");
            }}
          >
            Add Product
          </ActionButton>
          <ActionButton
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              if (products.length === 0) return;
              dispatch(addOrder(products));
              setProducts([]);
              setProduct("");
              setQuantity("");
            }}
          >
            Add order
          </ActionButton>
        </ActionButtons>
        <ProductsContainer>
          <h4>Products: </h4>
          <HeaderProducts>
            <span>Q</span>
            <span>Product</span>
          </HeaderProducts>
          <ProductListContainer>
            <ProductList>
              {products.map((product, i) => (
                <li key={i}>
                  <span className="quantity">{product.quantity}</span>
                  <span className="product">{product.product}</span>
                </li>
              ))}
            </ProductList>
          </ProductListContainer>
        </ProductsContainer>
      </ContentWrapper>
    </Wrapper>
  );
};

export default AddOrderForm;
