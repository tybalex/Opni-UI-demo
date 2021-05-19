import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";

const Tables = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Alerts List" subtitle="overview" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Active Alerts</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Alert Summary
                  </th>
                  <th scope="col" className="border-0">
                    Time Occurs
                  </th>
                  <th scope="col" className="border-0">
                    Time Last
                  </th>
                  <th scope="col" className="border-0">
                    Sev Level
                  </th>
                  <th scope="col" className="border-0">
                    Trace Logs
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Summary1</td>
                  <td>00:00</td>
                  <td>10 min</td>
                  <td>Sev 1</td>
                  <td>Log placeholder1</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Summary2</td>
                  <td>05:00</td>
                  <td>1 min</td>
                  <td>Sev 2</td>
                  <td>Log placeholder2</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Summary3</td>
                  <td>10:00</td>
                  <td>10s</td>
                  <td>Sev 1</td>
                  <td>Log placeholder3</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Summary4</td>
                  <td>20:00</td>
                  <td>5 min</td>
                  <td>Sev 2</td>
                  <td>Log placeholder4</td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>

    {/* Default Dark Table */}
    <Row>
      <Col>
        <Card small className="mb-4 overflow-hidden">
          <CardHeader className="bg-dark">
            <h6 className="m-0 text-white">Recommanded Activity</h6>
          </CardHeader>
          <CardBody className="bg-dark p-0 pb-3">
            <table className="table table-dark mb-0">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Solution Activity
                  </th>
                  <th scope="col" className="border-0">
                    Reference Links
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Solution placeholder1</td>
                  <a href="https://github.com/kubernetes/kops/issues/5936"><td>github.com/kubernetes/kops/issues/5936</td></a>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Solution placeholder2</td>
                  <a href="https://github.com/rancher/rke2/issues/1025"><td>github.com/rancher/rke2/issues/1025</td></a>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Solution placeholder3</td>
                  <a href="https://stackoverflow.com/questions/3337914/how-can-i-make-a-link-from-a-td-table-cell"><td>www.stackoverflow.com/questions/3337914</td></a>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Solution placeholder4</td>
                  <a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiY1YGx9dbwAhXDqZ4KHXv-C2QQPAgI"><td>https://www.google.com/search?questions=k8s</td></a>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Tables;
