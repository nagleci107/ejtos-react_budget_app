import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// code to import components
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import RemainingBudget from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseItem from './components/ExpenseItem';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Currency from './components/currency.js';

// app components
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget />
                    </div>
                    <div className='col-sm'>   
                        <ExpenseTotal />
                    </div>
                    <div className='col-sm'>
                        <Currency />
                    </div>
                </div>
                    <h3 className='mt-3'>Allocation</h3>
                    <div classname='row'>
                    <div classname='col-sm'>
                        <ExpenseList />
                    </div>
                    <div classname='col-sm'>
                        <ExpenseItem />
                    </div> 
                    </div>  

                    <h3 classname='mt-3'>Change allocation</h3>
                    <div className='row mt-3'>
                    <div classname='col-sm'>
                        <AllocationForm />
                    </div>      
                </div>
            </div>
        </AppProvider>
    );
};

export default App;