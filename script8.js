  const AgeCheck = (Age) => {
    if(Age >= 18)
    {
      return true;
    }
    else
    {
      return false;
    }
  };
  const Greet = () => {
    let ageperson = AgeCheck.call(this, 18)
    if(ageperson == true)
    {
      return "Hello there";
    }
    else
    {
      return "Hey kiddo";
    }
  };


  console.log(AgeCheck(18));
  console.log(Greet());


  const ProductVAT = (ProductPrice, VATPercetage) => {
    let VATIncluded = CalculateVAT.call(this, ProductPrice, VATPercetage)
    return VATIncluded;
  }

  const CalculateVAT = (ProductPrice,VATPercetage) =>{
    return ProductPrice * (VATPercetage / 100) + ProductPrice;
  }

  const ProductVATReverse = (ProductPriceVAT, VATPercetage2) => {
    let VATIncluded = CalculateVATReverse.call(this, ProductPriceVAT, VATPercetage2)
    return VATIncluded;
  }
  
  const CalculateVATReverse = (ProductPriceVAT,VATPercetage2) =>{
    let baseprice = ProductPriceVAT / (VATPercetage2 / 100 + 1);
    let VAT = ProductPriceVAT - baseprice;
    return [baseprice, VAT];
  }
  console.log(ProductVATReverse(2.18,9));
  console.log(ProductVAT(2,9));