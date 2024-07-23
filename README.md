
# Health Tracker Challenge

This project is a simple Angular application to track users and their workouts.

## Getting Started

### Prerequisites

- Node.js and npm installed
- Angular CLI installed

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/therajusah/Health-Challenge-Tracker.git
   cd Health-Challenge-Tracker
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the application:
   ```bash
   ng serve
   ```
4. Open your browser and navigate to `http://localhost:4200/`

### Running Tests

To run the unit tests and generate a code coverage report:

```bash
ng test --code-coverage
```

### Features

- Add, view, and filter users and their workouts.
- Pagination support for more than 5 users.
- Data persistence using local storage.
- Responsive design

## Code Coverage

This project includes unit tests for `UserTableComponent`, `AppComponent`, and `UserService` with 100% code coverage. The following test cases are covered:

### UserTableComponent

1. **Initialization Tests**
   - **should call loadFromLocalStorage on initialization:** Ensures `loadFromLocalStorage` is called when the component initializes.

2. **Functionality Tests**
   - **should load users from UserService and display them:** Verifies that users are loaded from `UserService` and displayed correctly in the table.

### AppComponent

1. **Basic Functionality**
   - **should create the app:** Confirms that the `AppComponent` is properly instantiated.
   - **should have the 'Hello, Health Tracker Challenge' title:** Checks if the component has the correct title.
   - **should render title:** Ensures that the title is rendered correctly in the component’s template.

### UserService

1. **Service Creation**
   - **should be created:** Confirms that the `UserService` is properly instantiated.

2. **User Management**
   - **should retrieve users as an observable:** Ensures that users can be retrieved as an observable.
   - **should add and retrieve users correctly:** Tests that a user can be added and retrieved correctly.
   - **should clear users correctly:** Verifies that all users can be cleared correctly.

### Coverage Report

To view the code coverage report:

1. **Run the Tests with Coverage:**
   Make sure you have run the unit tests with the code coverage option enabled. Use the following command:
   ```bash
   ng test --code-coverage
   ```

2. **Locate the Coverage Report:**
   After running the tests, an HTML coverage report will be generated. By default, it is located in the `coverage` folder in the root of your project directory.

3. **Open the Coverage Report:**
   Navigate to the `coverage` folder and open the `index.html` file in your web browser.

4. **Review the Coverage Details:**
   The coverage report will show a detailed breakdown of the code coverage. [Click to see coverage report](https://drive.google.com/file/d/11r-rbmJd03wp9ZOON0MzOaaS3UyNjzN0/view?usp=sharing)