import React from "react";
import PageTemplate from "../../components/common/PageTemplate";
import "./HomeScreen.scss";
const HomeScreen = () => {
  return (
    <PageTemplate>
      <div className="ui grid">
        <div className="aligned two column row">
          <div className="ten wide column">
            <h3 class="ui header">Graph</h3>
            <div className="ui segment">
              <div className="sections">
                <div className="section-item">QA results</div>
                <div className="section-item">QA avg, results</div>
                <div className="section-item">Customer feedback</div>
              </div>
              <div className="sections">
                <div className="section-item">QA results</div>
                <div className="section-item">QA avg, results</div>
                <div className="section-item">Customer feedback</div>
              </div>
            </div>
          </div>
          <div className="six wide column">
            <div className="ui segment">Center aligned</div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default HomeScreen;
