import React from "react";

import { Col, Row } from "reactstrap";
import EditFormModal from "./EditFormModal";
import PostForm from "./PostForm";
const Home = () => {
  // const posts = useSelector((state) => state.posts);

  return (
    <>
      <h2 className="text-center mt-5">Add Post</h2>
      <Row className="justify-content-center">
        <Col xs="6">
          <PostForm inputProp="value"></PostForm>
        </Col>
      </Row>
      {/* <EditFormModal
        modal={modal}
        setModal={setModal}
        setNewCatagoriesValue={setNewCatagoriesValue}
        newCatagoriesValue={newCatagoriesValue}
      /> */}
    </>
  );
};

export default Home;
