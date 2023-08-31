document.getElementById("calculate").addEventListener("click", function () {
    const cT = document.getElementById("cT").value;
    const pT = document.getElementById("pT").value;
    const st = document.getElementById("st").value;
    const eR = document.getElementById("eR").value;
    const prs = document.getElementById("prs").value;
    const tNC = parseInt(document.getElementById("tNC").value);
    const mV = parseInt(document.getElementById("mV").value);
    const j = [
    ["Individual","Credit","Gold","Std","Virtual"," $3,000.00 "," $1,500.00 ","$1.35","$1.32","$1.30","$1.27","$1.24","$1.22","0.60%","0.62%","0.64%","0.66%","0.68%"  ],
    ["Individual","Credit","Gold","Std","Physical"," $5,000.00 "," $2,500.00 ","$1.35","$1.32","$1.30","$1.27","$1.24","$1.22","0.60%","0.62%","0.64%","0.66%","0.68%"  ],
    ["Individual","Credit","Gold","Premium","Virtual"," $6,000.00 "," $3,000.00 ","$1.35","$1.32","$1.30","$1.27","$1.24","$1.22","0.60%","0.62%","0.64%","0.66%","0.68%"  ],
    ["Individual","Credit","Gold","Premium","Physical"," $10,000.00 "," $5,000.00 ","$1.35","$1.32","$1.30","$1.27","$1.24","$1.22","0.60%","0.62%","0.64%","0.66%","0.68%"  ],
    ["Individual","Credit","Platinum","Std","Virtual"," $5,000.00 "," $2,500.00 ","$2.35","$2.30","$2.26","$2.21","$2.16","$2.12","0.70%","0.72%","0.74%","0.76%","0.78%"  ],
    ["Individual","Credit","Platinum","Std","Physical"," $7,500.00 "," $3,750.00 ","$2.35","$2.30","$2.26","$2.21","$2.16","$2.12","0.70%","0.72%","0.74%","0.76%","0.78%"  ],
    ["Individual","Credit","Platinum","Premium","Virtual"," $7,000.00 "," $3,500.00 ","$2.35","$2.30","$2.26","$2.21","$2.16","$2.12","0.70%","0.72%","0.74%","0.76%","0.78%"  ],
    ["Individual","Credit","Platinum","Premium","Physical"," $12,000.00 "," $6,000.00 ","$2.35","$2.30","$2.26","$2.21","$2.16","$2.12","0.70%","0.72%","0.74%","0.76%","0.78%"  ],
    ["Individual","Credit","Black","Std","Virtual"," $8,500.00 "," $4,250.00 ","$4.60","$4.51","$4.41","$4.32","$4.23","$4.13","0.80%","0.82%","0.84%","0.86%","0.88%"  ],
    ["Individual","Credit","Black","Std","Physical"," $15,000.00 "," $7,500.00 ","$4.60","$4.51","$4.41","$4.32","$4.23","$4.13","0.80%","0.82%","0.84%","0.86%","0.88%"  ],
    ["Individual","Credit","Black","Premium","Virtual"," $10,000.00 "," $5,000.00 ","$4.60","$4.51","$4.41","$4.32","$4.23","$4.13","0.80%","0.82%","0.84%","0.86%","0.88%"  ],
    ["Individual","Credit","Black","Premium","Physical"," $20,000.00 "," $10,000.00 ","$4.60","$4.51","$4.41","$4.32","$4.23","$4.13","0.80%","0.82%","0.84%","0.86%","0.88%"  ],
    ["Individual","Debit","Platinum","Std","Virtual"," $5,000.00 "," $2,500.00 ","$4.60","$4.51","$4.41","$4.32","$4.23","$4.13","0.70%","0.72%","0.74%","0.76%","0.78%"  ],
    ["Individual","Debit","Platinum","Std","Physical"," $7,500.00 "," $3,750.00 ","$4.60","$4.51","$4.41","$4.32","$4.23","$4.13","0.70%","0.72%","0.74%","0.76%","0.78%"  ],
    ["Individual","Prepaid","Rechargeable","Std","Virtual"," $2,500.00 "," $1,250.00 ","$1.15","$1.13","$1.10","$1.08","$1.06","$1.04","0.30%","0.32%","0.34%","0.36%","0.38%"  ],
    ["Individual","Prepaid","Rechargeable","Std","Physical"," $5,000.00 "," $2,500.00 ","$1.15","$1.13","$1.10","$1.08","$1.06","$1.04","0.30%","0.32%","0.34%","0.36%","0.38%"  ],
    ["Individual","Prepaid","Rechargeable","Premium","Virtual"," $4,000.00 "," $2,000.00 ","$1.15","$1.13","$1.10","$1.08","$1.06","$1.04","0.30%","0.32%","0.34%","0.36%","0.38%"  ],
    ["Individual","Prepaid","Rechargeable","Premium","Physical"," $10,000.00 "," $5,000.00 ","$1.15","$1.13","$1.10","$1.08","$1.06","$1.04","0.30%","0.32%","0.34%","0.36%","0.38%"  ],
    ["Individual","Prepaid","Single Use","Std","Virtual"," $2,000.00 "," $1,000.00 ","$1.15","$1.13","$1.10","$1.08","$1.06","$1.04","0.30%","0.32%","0.34%","0.36%","0.38%"  ],
    ["Individual","Prepaid","Single Use","Std","Physical"," $3,000.00 "," $1,500.00 ","$1.15","$1.13","$1.10","$1.08","$1.06","$1.04","0.30%","0.32%","0.34%","0.36%","0.38%"  ],
    ["Individual","Prepaid","Single Use","Premium","Virtual"," $2,500.00 "," $1,250.00 ","$1.15","$1.13","$1.10","$1.08","$1.06","$1.04","0.30%","0.32%","0.34%","0.36%","0.38%"  ],
    ["Business","Prepaid","Single Use","Premium","Physical"," $5,000.00 "," $2,500.00 ","$1.15","$1.13","$1.10","$1.08","$1.06","$1.04","0.30%","0.32%","0.34%","0.36%","0.38%"  ],
    ["Business","Credit","Executive Business","Std","Virtual"," $5,000.00 "," $2,500.00 ","$2.35","$2.30","$2.26","$2.21","$2.16","$2.12","0.70%","0.72%","0.74%","0.76%","0.78%"  ],
    ["Business","Credit","Executive Business","Std","Physical"," $7,500.00 "," $3,750.00 ","$2.35","$2.30","$2.26","$2.21","$2.16","$2.12","0.70%","0.72%","0.74%","0.76%","0.78%"  ],
    ["Business","Credit","Executive Business","Plus","Virtual"," $7,000.00 "," $3,500.00 ","$2.35","$2.30","$2.26","$2.21","$2.16","$2.12","0.70%","0.72%","0.74%","0.76%","0.78%"  ],
    ["Business","Credit","Executive Business","Plus","Physical"," $12,000.00 "," $6,000.00 ","$2.35","$2.30","$2.26","$2.21","$2.16","$2.12","0.70%","0.72%","0.74%","0.76%","0.78%"  ],
    ["Business","Credit","Executive Business","Premium","Virtual"," $8,500.00 "," $4,250.00 ","$2.35","$2.30","$2.26","$2.21","$2.16","$2.12","0.70%","0.72%","0.74%","0.76%","0.78%"  ],
    ["Business","Credit","Executive Business","Premium","Physical"," $15,000.00 "," $7,500.00 ","$2.35","$2.30","$2.26","$2.21","$2.16","$2.12","0.70%","0.72%","0.74%","0.76%","0.78%"  ],
    ["Business","Credit","Black","Std","Virtual"," $10,000.00 "," $5,000.00 ","$4.60","$4.51","$4.41","$4.32","$4.23","$4.13","0.80%","0.82%","0.84%","0.86%","0.88%"  ],
    ["Business","Credit","Black","Std","Physical"," $25,000.00 "," $12,500.00 ","$4.60","$4.51","$4.41","$4.32","$4.23","$4.13","0.80%","0.82%","0.84%","0.86%","0.88%"  ],
    ["Business","Prepaid","Rechargeable","Std","Virtual"," $4,000.00 "," $2,000.00 ","$1.15","$1.13","$1.10","$1.08","$1.06","$1.04","0.30%","0.32%","0.34%","0.36%","0.38%"  ],
    ["Business","Prepaid","Rechargeable","Std","Physical"," $10,000.00 "," $5,000.00 ","$1.15","$1.13","$1.10","$1.08","$1.06","$1.04","0.30%","0.32%","0.34%","0.36%","0.38%"  ]
  ];

    // Find matching data row (m) based on selected options
    const m = j.find(row =>
        row[0] === cT &&
        row[1] === pT &&
        row[2] === st &&
        row[3] === eR &&
        row[4] === prs
    );

    if (m) {
        const pr1 = parseFloat(m[5].replace("$", "").replace(",", ""));
        const pr2 = parseFloat(m[6].replace("$", "").replace(",", ""));
        
        const prices = [];
        for (let i = 7; i <= 11; i++) {
            prices.push(parseFloat(m[i].replace("$", "").replace(" ", "")));
        }

        let vMF;
            if (tNC < 10000) {
              vMF = tNC * prices[0];
            } else if (tNC < 20000) {
              vMF = tNC * prices[1];
            } else if (tNC < 30000) {
              vMF = tNC * prices[2];
            } else if (tNC < 40000) {
              vMF = tNC * prices[3];
            } else if (tNC < 50000) {
              vMF = tNC * prices[4];
            } else {
              vMF = tNC * prices[5];
            }
            
        const crs= [];
        for (let i = 13; i <= 17; i++) {
                crs.push(parseFloat(m[i].replace("%", "")) / 100);
            }
        
            let cr = 0;

            if (mV < 100000) {
                cr = 0;
            } else if (mV > 2500000) {
                cr = parseFloat(crs[crs.length - 1]); // Using the last cashback rate in the array
            } else {
                const thresholds = [100000, 500000, 1000000, 1750000, 2500000];
                for (let i = 0; i < thresholds.length; i++) {
                    if (mV <= thresholds[i]) {
                        cr = parseFloat(crs[i]);
                        break;
                    }
                }
            }
            
            const tCB = mV * cr;
                        
        function cBM(tNC) {
        if (tNC <= 10000) {
            return 1500.00;
        } else if (tNC <= 20000) {
            return 2000.00;
        } else if (tNC <= 30000) {
            return 2500.00;
        } else if (tNC <= 40000) {
            return 3000.00;
        } else if (tNC <= 50000) {
            return 3500.00;
        } else {
            return 4000.00;
        }
    }
                      const BM = cBM(tNC);
        
        const TMF = vMF+BM
        const feeData = [
            { label: "Setup Fee as Main Profile", amount: pr1 },
            { label: "Setup Fee as Addon Profile", amount: pr2 },
            { label: "Monthly Card Fee", amount: vMF },
            { label: "Base Maintenance Fee", amount: BM },
            { label: "Total Maintenance Fee", amount: TMF },
            { label: "Applicable Cashback Rate", amount: `${(cr * 100).toFixed(2)}%` },
            { label: "Cashback", amount: `${tCB.toLocaleString("en-US", { style: "currency", currency: "USD" })}` }
        ];

        const r = `
            <table>
                <tr>
                    <th>Fee Type</th>
                    <th>Amount</th>
                </tr>
                ${feeData.map(item => `
                    <tr>
                        <td>${item.label}</td>
                        <td>${item.label.includes("Cashback rate") ? item.amount : item.amount.toLocaleString("en-US", { style: "currency", currency: "USD" })}</td>
                    </tr>
                `).join('')}
            </table>
        `;

        document.getElementById("resultContainer").innerHTML = r;
    } else {
        document.getElementById("resultContainer").innerHTML = "No matching specifications found.";
    }
});
