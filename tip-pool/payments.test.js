
describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 150;
      tipAmtInput.value = 30;
    });


    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
        submitPaymentInfo();
        
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment' + paymentId].billAmt).toEqual('150');
        expect(allPayments['payment' + paymentId].tipAmt).toEqual('30');
        expect(allPayments['payment' + paymentId].tipPercent).toEqual(20);
    });

    it('should not add a new payment to allPayments on submitPaymentInfo() with empty/blank input', function () {
        billAmtInput.value = '';
        submitPaymentInfo();
        
        expect(Object.keys(allPayments).length).toEqual(0);
    });

    it('should create a new payment on createCurPayment()', function () {
        let newPayment = {
            billAmt: '150',
            tipAmt: '30',
            tipPercent: 20,
        }
        
        expect(createCurPayment()).toEqual(newPayment);
    });
    
    it('should not create a new payment on createCurPayment() with empty/blank input', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        
        expect(createCurPayment()).toEqual(undefined);
    });

    it('should update #paymentTable on appendPaymentTable()', function () {
        let newPayment = createCurPayment();
        allPayments['payment1'] = newPayment;

        appendPaymentTable(newPayment);

        let newTd = document.querySelectorAll('#paymentTable td');

        expect(newTd.length).toEqual(4);
        expect(newTd[0].innerText).toEqual('$150');
        expect(newTd[1].innerText).toEqual('$30');
        expect(newTd[2].innerText).toEqual('20%');
        expect(newTd[3].innerText).toEqual('X');
    });

    it('should update the Shift summary table on updateSummary()', function () {
        let newPayment1 = createCurPayment();
        allPayments['payment1'] = newPayment1;

        appendPaymentTable(newPayment1);


        billAmtInput.value = 100;
        tipAmtInput.value = 10;
        let newPayment2 = createCurPayment();
        allPayments['payment2'] = newPayment2;

        appendPaymentTable(newPayment2);

        updateSummary();
        expect(summaryTds[2].innerHTML).toEqual('15%');

    });

    afterEach(function() {
        // teardown logic

        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentId = 0;
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        allPayments = {};
        
    });
  
});

