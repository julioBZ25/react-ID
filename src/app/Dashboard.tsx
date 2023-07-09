import { styled } from "styled-components";
import AddOrderForm from "./components/AddOrderForm";
import OrderSection from "./components/OrderSection";
import SortByFilter from "./components/SortByFilter";

const SectionOrder = styled.section`
  width: 100%;
  overflow: auto;
`;

const MainDashboard = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0.5rem;
  .main_section {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    height: 100%;
  }
  .main_header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

const SectionOrderForm = styled.section`
  min-height: 600px;
`;

const Title = styled.h1`
  text-align: left;
  color: white;
  font-size: 4rem;
`;

const Dashboard = () => {
  return (
    <MainDashboard>
      <div className="main_header">
        <Title>Kitchen Display</Title>
        <SortByFilter />
      </div>
      <div className="main_section">
        <SectionOrderForm>
          <AddOrderForm />
        </SectionOrderForm>
        <SectionOrder>
          <OrderSection />
        </SectionOrder>
      </div>
    </MainDashboard>
  );
};

export default Dashboard;
