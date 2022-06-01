import logo from "./logo.svg";
import "./App.css";

function App() {
  const planList = [
    {
      planname: "Free",
      amount: "0",
      users: "Single User",
      storage: "5GB Storage",
      publicProjects: "Unlimited Public Projects",
      access: "Community Access",
      privateProjects: ["Unlimited Public Projects", false],
      phoneSupport: ["Dedicated Phone Support", false],
      subDomain: ["", false],
      statusReport: ["Monthly Status Report", false],
    },
    {
      planname: "Plus",
      amount: "9",
      users: "5 User",
      storage: "50GB Storage",
      publicProjects: "Unlimited Public Projects",
      access: "Community Access",
      privateProjects: ["Unlimited Public Projects", true],
      phoneSupport: ["Dedicated Phone Support", true],
      subDomain: ["", true],
      statusReport: ["Monthly Status Report", false],
    },
    {
      planname: "Pro",
      amount: "49",
      users: "Unlimited User",
      storage: "150GB Storage",
      publicProjects: "Unlimited Public Projects",
      access: "Community Access",
      privateProjects: ["Unlimited Public Projects", true],
      phoneSupport: ["Dedicated Phone Support", true],
      subDomain: ["Unlimited", true],
      statusReport: ["Monthly Status Report", true],
    },
  ];
  return (
    <div className="App">
      <section class="pricing py-5">
        <div class="container">
          <div class="row">
            {planList.map((plan) => (
              <PlanCard
                planname={plan.planname}
                amount={plan.amount}
                users={plan.users}
                storage={plan.storage}
                publicProjects={plan.publicProjects}
                access={plan.access}
                privateProjects={plan.privateProjects}
                phoneSupport={plan.phoneSupport}
                subDomain={plan.subDomain}
                statusReport={plan.statusReport}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function PlanCard(props) {
  const isFree = props.planname == "Free";
  const issubdomainEmpty = props.subDomain == "";
  return (
    <div class="col-lg-4">
      <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">
            {props.planname}
          </h5>
          <h6 class="card-price text-center">
            ${props.amount}
            <span class="period">/month</span>
          </h6>
          <hr />
          <ul class="fa-ul">
            <li>
              <span class="fa-li">
                <i class="fa fa-check"></i>
              </span>

              {isFree ? <>{props.users}</> : <strong> {props.users}</strong>}
            </li>
            <li>
              <span class="fa-li">
                <i class="fa fa-check"></i>
              </span>

              {props.storage}
            </li>
            <li>
              <span class="fa-li">
                <i class="fa fa-check"></i>
              </span>
              {props.publicProjects}
            </li>
            <li>
              <span class="fa-li">
                <i class="fa fa-check"></i>
              </span>
              {props.access}
            </li>
            <li class={!props.privateProjects[1] ? "text-muted" : ""}>
              <span class="fa-li">
                <i
                  class={
                    !props.privateProjects[1] ? "fa fa-times" : "fa fa-check"
                  }
                ></i>
              </span>
              {props.privateProjects}
            </li>
            <li class={!props.phoneSupport[1] ? "text-muted" : ""}>
              <span class="fa-li">
                <i
                  class={!props.phoneSupport[1] ? "fa fa-times" : "fa fa-check"}
                ></i>
              </span>
              {props.phoneSupport}
            </li>
            <li class={!props.subDomain[1] ? "text-muted" : ""}>
              <span class="fa-li">
                <i
                  class={!props.subDomain[1] ? "fa fa-times" : "fa fa-check"}
                ></i>
              </span>
              {!issubdomainEmpty ? <strong> {props.subDomain} </strong> : <></>}
              Free subDomain
            </li>
            <li class={!props.statusReport[1] ? "text-muted" : ""}>
              <span class="fa-li">
                <i
                  class={!props.statusReport[1] ? "fa fa-times" : "fa fa-check"}
                ></i>
              </span>
              {props.statusReport}
            </li>
          </ul>
          <div class="d-grid">
            <a href="/#" class="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
