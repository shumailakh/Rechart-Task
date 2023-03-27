import { render } from '@testing-library/react';
import App from '../App';

// });
import { BrowserRouter } from 'react-router-dom';

describe("App", () => {
  it("renders correctly", async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
});
