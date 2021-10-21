
describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 150;
      tipAmtInput.value = 30;
      submitPaymentInfo();
    });
    
    it('should calculate the total bill amount and tip amount on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(150);
        expect(sumPaymentTotal('tipAmt')).toEqual(30);

        billAmtInput.value = 100;
        tipAmtInput.value = 10;
        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(250);
        expect(sumPaymentTotal('tipAmt')).toEqual(40);
    });
    
    it('should calculate the average tip percentage on calculateTipPercent()', function () {
        expect(calculateTipPercent(150,30)).toEqual(20);
        expect(calculateTipPercent(80,13)).toEqual(16);
    });

    // it('should ... on appendTd()', function () {
        
    // }); 
    

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

