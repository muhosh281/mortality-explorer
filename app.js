// Embedded life table data
const LIFE_TABLE_DATA = {
  "USA": {
    "male": {
      "period": {
        "ages": [0, 1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110],
        "lx": [100000, 99320, 99170, 99070, 98920, 98650, 98420, 98150, 97820, 97300, 96450, 95180, 93380, 90840, 87200, 81900, 74200, 63800, 50500, 35200, 19800, 8500, 2600, 400],
        "dx": [680, 150, 100, 150, 270, 230, 270, 330, 520, 850, 1270, 1800, 2540, 3640, 5300, 7700, 10400, 13300, 15300, 15400, 11300, 5900, 2200, 400],
        "qx": [0.00680, 0.00151, 0.00101, 0.00151, 0.00273, 0.00233, 0.00274, 0.00336, 0.00532, 0.00874, 0.01317, 0.01890, 0.02718, 0.04008, 0.06078, 0.09409, 0.14008, 0.20846, 0.30297, 0.43750, 0.57071, 0.69412, 0.84615, 1.00000],
        "ex": [73.5, 73.2, 69.4, 64.5, 59.6, 54.9, 50.2, 45.5, 40.9, 36.3, 31.9, 27.5, 23.2, 19.1, 15.2, 11.7, 8.7, 6.2, 4.3, 2.9, 2.0, 1.4, 1.0, 0.5]
      },
      "cohort": {
        "ages": [0, 1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110],
        "lx": [100000, 99380, 99250, 99160, 99020, 98760, 98540, 98280, 97970, 97480, 96680, 95450, 93720, 91240, 87660, 82430, 74820, 64500, 51400, 36300, 21000, 9500, 3100, 500],
        "dx": [620, 130, 90, 140, 260, 220, 260, 310, 490, 800, 1230, 1730, 2480, 3580, 5230, 7610, 10320, 13100, 15100, 15300, 11500, 6400, 2600, 500],
        "qx": [0.00620, 0.00131, 0.00091, 0.00141, 0.00263, 0.00223, 0.00264, 0.00315, 0.00501, 0.00821, 0.01272, 0.01817, 0.02649, 0.03924, 0.05959, 0.09239, 0.13786, 0.20465, 0.29389, 0.42148, 0.54762, 0.67368, 0.83871, 1.00000],
        "ex": [76.2, 75.9, 72.1, 67.2, 62.3, 57.6, 52.9, 48.2, 43.6, 39.0, 34.6, 30.2, 26.0, 21.8, 17.7, 13.8, 10.2, 7.3, 5.0, 3.3, 2.2, 1.5, 1.0, 0.5]
      }
    },
    "female": {
      "period": {
        "ages": [0, 1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110],
        "lx": [100000, 99430, 99310, 99240, 99150, 99060, 98980, 98900, 98780, 98620, 98420, 98140, 97730, 97120, 96160, 94700, 92350, 88600, 82800, 73600, 58200, 38500, 18200, 4800],
        "dx": [570, 120, 70, 90, 90, 80, 80, 120, 160, 200, 280, 410, 610, 960, 1460, 2350, 3750, 5800, 9200, 15400, 19700, 20300, 13400, 4800],
        "qx": [0.00570, 0.00121, 0.00071, 0.00091, 0.00091, 0.00081, 0.00081, 0.00121, 0.00162, 0.00203, 0.00285, 0.00418, 0.00624, 0.00989, 0.01519, 0.02482, 0.04059, 0.06544, 0.11111, 0.20918, 0.33851, 0.52727, 0.73626, 1.00000],
        "ex": [79.3, 78.8, 75.0, 70.1, 65.2, 60.3, 55.3, 50.4, 45.5, 40.6, 35.8, 31.0, 26.4, 21.9, 17.6, 13.6, 10.0, 7.0, 4.8, 3.2, 2.1, 1.4, 0.9, 0.5]
      },
      "cohort": {
        "ages": [0, 1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110],
        "lx": [100000, 99480, 99370, 99310, 99230, 99150, 99080, 99010, 98900, 98750, 98560, 98280, 97890, 97290, 96360, 94920, 92600, 88900, 83200, 73900, 58400, 38600, 18300, 4900],
        "dx": [520, 110, 60, 80, 80, 70, 70, 110, 150, 190, 280, 390, 600, 930, 1440, 2320, 3700, 5700, 9300, 15500, 19800, 20300, 13400, 4900],
        "qx": [0.00520, 0.00111, 0.00061, 0.00081, 0.00081, 0.00071, 0.00071, 0.00111, 0.00152, 0.00192, 0.00284, 0.00397, 0.00613, 0.00957, 0.01496, 0.02447, 0.03994, 0.06405, 0.11173, 0.20970, 0.33904, 0.52618, 0.73634, 1.00000],
        "ex": [81.8, 81.3, 77.5, 72.6, 67.7, 62.8, 57.9, 53.0, 48.1, 43.3, 38.5, 33.8, 29.2, 24.7, 20.4, 16.2, 12.3, 8.8, 6.1, 4.0, 2.6, 1.7, 1.1, 0.6]
      }
    }
  },
  "UK": {
    "male": {
      "period": {
        "ages": [0, 1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110],
        "lx": [100000, 99350, 99200, 99110, 98970, 98700, 98480, 98210, 97890, 97380, 96540, 95280, 93500, 91000, 87400, 82200, 74600, 64400, 51300, 36100, 20300, 8800, 2700, 400],
        "dx": [650, 150, 90, 140, 270, 220, 270, 320, 510, 840, 1260, 1780, 2500, 3600, 5200, 7600, 10200, 13100, 15200, 15800, 11500, 6100, 2300, 400],
        "qx": [0.00650, 0.00151, 0.00091, 0.00141, 0.00273, 0.00223, 0.00274, 0.00326, 0.00521, 0.00863, 0.01304, 0.01869, 0.02688, 0.03956, 0.05960, 0.09247, 0.13671, 0.20342, 0.29650, 0.43772, 0.56650, 0.69318, 0.85185, 1.00000],
        "ex": [74.8, 74.5, 70.7, 65.8, 61.0, 56.2, 51.5, 46.8, 42.1, 37.5, 33.1, 28.7, 24.4, 20.2, 16.3, 12.6, 9.2, 6.4, 4.4, 3.0, 2.0, 1.4, 0.9, 0.5]
      },
      "cohort": {
        "ages": [0, 1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110],
        "lx": [100000, 99410, 99270, 99190, 99060, 98800, 98590, 98330, 98020, 97530, 96710, 95490, 93750, 91300, 87760, 82600, 75100, 64900, 51900, 36700, 21200, 9600, 3200, 500],
        "dx": [590, 140, 80, 130, 260, 210, 260, 310, 490, 820, 1220, 1740, 2450, 3540, 5160, 7500, 10200, 13000, 15200, 15500, 11600, 6400, 2700, 500],
        "qx": [0.00590, 0.00141, 0.00081, 0.00131, 0.00263, 0.00213, 0.00264, 0.00315, 0.00500, 0.00840, 0.01262, 0.01825, 0.02614, 0.03877, 0.05877, 0.09083, 0.13580, 0.20031, 0.29289, 0.42238, 0.54717, 0.66667, 0.84375, 1.00000],
        "ex": [77.4, 77.1, 73.3, 68.4, 63.6, 58.8, 54.1, 49.4, 44.8, 40.2, 35.7, 31.3, 27.0, 22.8, 18.8, 14.9, 11.0, 7.9, 5.5, 3.7, 2.4, 1.6, 1.0, 0.5]
      }
    },
    "female": {
      "period": {
        "ages": [0, 1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110],
        "lx": [100000, 99450, 99330, 99270, 99190, 99110, 99040, 98970, 98860, 98710, 98520, 98250, 97860, 97260, 96330, 94890, 92580, 88900, 83200, 74200, 59100, 39200, 18600, 5000],
        "dx": [550, 120, 60, 80, 80, 70, 70, 110, 150, 190, 270, 390, 600, 930, 1440, 2310, 3680, 5700, 9000, 15100, 19900, 20600, 13600, 5000],
        "qx": [0.00550, 0.00121, 0.00061, 0.00081, 0.00081, 0.00071, 0.00071, 0.00111, 0.00152, 0.00192, 0.00274, 0.00397, 0.00614, 0.00957, 0.01496, 0.02436, 0.03983, 0.06404, 0.10802, 0.20349, 0.33688, 0.52551, 0.73118, 1.00000],
        "ex": [80.9, 80.4, 76.6, 71.7, 66.8, 61.9, 57.0, 52.1, 47.2, 42.3, 37.5, 32.8, 28.2, 23.7, 19.4, 15.2, 11.3, 8.1, 5.6, 3.8, 2.4, 1.6, 1.0, 0.5]
      },
      "cohort": {
        "ages": [0, 1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110],
        "lx": [100000, 99500, 99380, 99330, 99260, 99190, 99120, 99060, 98950, 98810, 98630, 98360, 97980, 97390, 96470, 95050, 92780, 89140, 83500, 74700, 59500, 39700, 19000, 5200],
        "dx": [500, 120, 50, 70, 70, 70, 60, 110, 140, 180, 270, 380, 590, 920, 1420, 2270, 3640, 5640, 8800, 15200, 19800, 20700, 13800, 5200],
        "qx": [0.00500, 0.00121, 0.00051, 0.00071, 0.00071, 0.00071, 0.00061, 0.00111, 0.00141, 0.00182, 0.00273, 0.00387, 0.00602, 0.00948, 0.01472, 0.02389, 0.03922, 0.06329, 0.10540, 0.20348, 0.33389, 0.52144, 0.72632, 1.00000],
        "ex": [83.5, 83.0, 79.2, 74.3, 69.4, 64.5, 59.6, 54.7, 49.8, 45.0, 40.2, 35.5, 30.9, 26.5, 22.1, 17.9, 13.9, 10.4, 7.3, 5.0, 3.2, 2.1, 1.3, 0.6]
      }
    }
  },
  "South Africa": {
    "male": {
      "period": {
        "ages": [0, 1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110],
        "lx": [100000, 94200, 91000, 89700, 87800, 84300, 79200, 72800, 65500, 57400, 48200, 38900, 30500, 23200, 16800, 11500, 7200, 4100, 2000, 800, 250, 60, 10, 1],
        "dx": [5800, 3200, 1300, 1900, 3500, 5100, 6400, 7300, 8100, 9200, 9300, 8400, 7300, 6400, 5300, 4300, 3100, 2100, 1200, 550, 190, 50, 9, 1],
        "qx": [0.05800, 0.03392, 0.01429, 0.02118, 0.03984, 0.06049, 0.08087, 0.10027, 0.12366, 0.16014, 0.19272, 0.21592, 0.23934, 0.27586, 0.31548, 0.37391, 0.43056, 0.51220, 0.60000, 0.68750, 0.76000, 0.83333, 0.90000, 1.00000],
        "ex": [56.2, 61.8, 60.1, 56.4, 51.8, 46.9, 41.5, 36.2, 31.2, 26.6, 22.4, 18.5, 15.1, 12.0, 9.2, 6.8, 4.9, 3.3, 2.2, 1.3, 0.9, 0.6, 0.4, 0.2]
      },
      "cohort": {
        "ages": [0, 1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110],
        "lx": [100000, 94500, 91400, 90200, 88400, 84900, 79700, 73100, 65600, 57300, 48000, 38800, 30600, 23400, 17000, 11700, 7300, 4200, 2100, 800, 260, 70, 11, 1],
        "dx": [5500, 3100, 1200, 1800, 3500, 5200, 6600, 7500, 8300, 9300, 9200, 8200, 7200, 6400, 5300, 4400, 3100, 2100, 1300, 540, 190, 59, 10, 1],
        "qx": [0.05500, 0.03281, 0.01313, 0.01996, 0.03949, 0.06072, 0.08286, 0.10260, 0.12651, 0.16228, 0.19167, 0.21134, 0.23529, 0.27350, 0.31176, 0.37607, 0.42466, 0.50000, 0.61905, 0.67500, 0.73077, 0.84286, 0.90909, 1.00000],
        "ex": [58.5, 64.2, 62.4, 58.6, 53.9, 48.9, 43.3, 37.9, 32.7, 27.9, 23.4, 19.2, 15.5, 12.1, 9.2, 6.8, 4.9, 3.3, 2.2, 1.4, 0.9, 0.6, 0.4, 0.2]
      }
    },
    "female": {
      "period": {
        "ages": [0, 1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110],
        "lx": [100000, 95100, 92300, 91200, 89600, 87000, 83200, 78500, 72800, 66000, 58200, 49500, 40500, 31800, 23600, 16200, 10200, 5800, 2800, 1100, 350, 90, 15, 2],
        "dx": [4900, 2800, 1100, 1600, 2600, 3800, 4700, 5700, 6800, 7800, 8700, 9000, 8700, 8200, 7400, 6000, 4400, 3000, 1700, 750, 260, 75, 13, 2],
        "qx": [0.04900, 0.02941, 0.01192, 0.01754, 0.02899, 0.04368, 0.05650, 0.07259, 0.09336, 0.11818, 0.14950, 0.18182, 0.21481, 0.25786, 0.31356, 0.37037, 0.43137, 0.51724, 0.60714, 0.68182, 0.74286, 0.83333, 0.86667, 1.00000],
        "ex": [61.4, 66.7, 65.0, 61.4, 56.9, 51.9, 46.9, 41.8, 36.8, 32.0, 27.4, 23.1, 19.1, 15.4, 12.0, 8.9, 6.3, 4.2, 2.8, 1.8, 1.2, 0.8, 0.5, 0.3]
      },
      "cohort": {
        "ages": [0, 1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110],
        "lx": [100000, 95400, 92700, 91600, 90100, 87500, 83600, 78800, 72900, 65900, 57900, 48900, 39600, 30600, 22400, 15300, 9600, 5500, 2700, 1000, 320, 85, 14, 2],
        "dx": [4600, 2700, 1100, 1500, 2600, 3900, 4800, 5900, 7000, 8000, 9000, 9300, 9000, 8200, 7100, 5700, 4100, 2800, 1700, 680, 235, 71, 12, 2],
        "qx": [0.04600, 0.02825, 0.01185, 0.01639, 0.02886, 0.04457, 0.05747, 0.07486, 0.09603, 0.12138, 0.15545, 0.19020, 0.22727, 0.26797, 0.31696, 0.37255, 0.42708, 0.50909, 0.62963, 0.68000, 0.73438, 0.83529, 0.85714, 1.00000],
        "ex": [63.8, 69.1, 67.3, 63.7, 59.0, 53.9, 48.8, 43.7, 38.6, 33.7, 28.9, 24.4, 20.1, 16.1, 12.3, 9.0, 6.3, 4.2, 2.8, 1.9, 1.2, 0.8, 0.5, 0.3]
      }
    }
  }
};

// Global state
let lifeData = null;
let currentChart = null;
let currentResults = null;

// DOM Elements
const countrySelect = document.getElementById('countrySelect');
const sexSelect = document.getElementById('sexSelect');
const ageInput = document.getElementById('ageInput');
const tableTypeRadios = document.querySelectorAll('input[name="tableType"]');
const calculateBtn = document.getElementById('calculateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const errorMsg = document.getElementById('errorMsg');
const survivalChart = document.getElementById('survivalChart');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadLifeTableData();
    calculateBtn.addEventListener('click', handleCalculate);
    downloadBtn.addEventListener('click', handleDownload);
});

/**
 * Load life table data
 */
function loadLifeTableData() {
    try {
        lifeData = LIFE_TABLE_DATA;
        clearError();
    } catch (error) {
        showError('Error loading life table data: ' + error.message);
        console.error(error);
    }
}

/**
 * Main calculation handler
 */
function handleCalculate() {
    clearError();
    
    try {
        // Get inputs
        const country = countrySelect.value;
        const sex = sexSelect.value;
        const age = parseInt(ageInput.value);
        const tableType = document.querySelector('input[name="tableType"]:checked').value;

        // Validate inputs
        if (!lifeData) {
            showError('Life table data not loaded. Please refresh the page.');
            return;
        }

        if (!lifeData[country]?.[sex]?.[tableType]) {
            showError(`Data not available for ${country} - ${sex} - ${tableType} table.`);
            return;
        }

        const tableData = lifeData[country][sex][tableType];

        if (age < 0 || age > 110) {
            showError('Age must be between 0 and 110.');
            return;
        }

        // Find the closest age in the data
        const ageIndex = findAgeIndex(tableData.ages, age);
        if (ageIndex === -1) {
            showError(`Age ${age} not found in life table.`);
            return;
        }

        // Calculate survival probabilities
        const survivalData = calculateSurvivalProbabilities(tableData, ageIndex);

        // Store results for CSV export
        currentResults = {
            country,
            sex,
            age: tableData.ages[ageIndex],
            tableType,
            tableData,
            ageIndex,
            survivalData
        };

        // Update UI
        displayResults(currentResults);
        updateChart(survivalData);
        updateDetailedTable(tableData, ageIndex);
        downloadBtn.disabled = false;

    } catch (error) {
        showError('Calculation error: ' + error.message);
        console.error(error);
    }
}

/**
 * Find index of age in life table (handle interpolation if needed)
 */
function findAgeIndex(ages, targetAge) {
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] === targetAge) return i;
        if (ages[i] > targetAge) return i - 1 >= 0 ? i - 1 : 0;
    }
    return ages.length - 1;
}

/**
 * Calculate survival probabilities from current age onward
 */
function calculateSurvivalProbabilities(tableData, ageIndex) {
    const { ages, lx } = tableData;
    const baseLx = lx[ageIndex];
    const survivalData = [];

    for (let i = ageIndex; i < ages.length; i++) {
        const age = ages[i];
        const survivalProbability = (lx[i] / baseLx) * 100; // Convert to percentage
        survivalData.push({
            age,
            probability: Math.max(0, survivalProbability)
        });
    }

    return survivalData;
}

/**
 * Calculate probability of surviving to a specific target age
 */
function calculateSurvivalToAge(tableData, ageIndex, targetAge) {
    const { ages, lx } = tableData;
    
    // Find target age index
    let targetIndex = -1;
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] === targetAge) {
            targetIndex = i;
            break;
        }
        if (ages[i] > targetAge) {
            targetIndex = i;
            break;
        }
    }

    if (targetIndex === -1 || targetIndex < ageIndex) {
        return 0;
    }

    return Math.max(0, (lx[targetIndex] / lx[ageIndex]) * 100);
}

/**
 * Display results in stats cards
 */
function displayResults(results) {
    const { country, sex, age, tableData, ageIndex } = results;
    const { ages, lx, ex } = tableData;

    // Update stat cards
    document.getElementById('displayAge').textContent = age;
    document.getElementById('displayEx').textContent = 
        (ex && ex[ageIndex] ? ex[ageIndex].toFixed(1) : '—');
    document.getElementById('displayProb65').textContent = 
        age <= 65 ? calculateSurvivalToAge(tableData, ageIndex, 65).toFixed(1) : '—';
    document.getElementById('displayProb80').textContent = 
        age <= 80 ? calculateSurvivalToAge(tableData, ageIndex, 80).toFixed(1) : '—';
    document.getElementById('displayProb90').textContent = 
        age <= 90 ? calculateSurvivalToAge(tableData, ageIndex, 90).toFixed(1) : '—';
    document.getElementById('displayMaxAge').textContent = Math.max(...ages);
}

/**
 * Update Chart.js survival curve
 */
function updateChart(survivalData) {
    const ctx = survivalChart.getContext('2d');

    if (currentChart) {
        currentChart.destroy();
    }

    const labels = survivalData.map(d => d.age);
    const data = survivalData.map(d => d.probability);

    currentChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [{
                label: 'Survival Probability (%)',
                data,
                borderColor: '#2563eb',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                fill: true,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 6,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: { size: 12 }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Age ${context.label}: ${context.parsed.y.toFixed(1)}%`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Survival Probability (%)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Age (years)'
                    }
                }
            }
        }
    });
}

/**
 * Update detailed life table display
 */
function updateDetailedTable(tableData, ageIndex) {
    const { ages, lx, dx, qx, ex } = tableData;
    const tableBody = document.getElementById('tableBody');
    const baseLx = lx[ageIndex];

    // Show 20 rows from current age
    const rowCount = Math.min(20, ages.length - ageIndex);
    let html = '';

    for (let i = 0; i < rowCount; i++) {
        const idx = ageIndex + i;
        const age = ages[idx];
        const lxValue = lx[idx];
        const dxValue = dx ? dx[idx] : 0;
        const qxValue = qx ? qx[idx] : 0;
        const exValue = ex ? ex[idx] : 0;
        const survivalProb = ((lxValue / baseLx) * 100).toFixed(2);

        html += `
            <tr>
                <td>${age}</td>
                <td>${lxValue.toFixed(0)}</td>
                <td>${dxValue.toFixed(0)}</td>
                <td>${qxValue.toFixed(4)}</td>
                <td>${exValue.toFixed(2)}</td>
                <td>${survivalProb}%</td>
            </tr>
        `;
    }

    tableBody.innerHTML = html || '<tr><td colspan="6">No data available</td></tr>';
}

/**
 * Handle CSV download
 */
function handleDownload() {
    if (!currentResults) {
        showError('Please calculate first.');
        return;
    }

    try {
        const { country, sex, age, tableType, tableData, ageIndex, survivalData } = currentResults;
        const { ages, lx, dx, qx, ex } = tableData;
        const baseLx = lx[ageIndex];

        // Build CSV
        let csvContent = 'Mortality & Longevity Explorer - Life Table Export\n';
        csvContent += `Country: ${country}, Sex: ${sex}, Age: ${age}, Table Type: ${tableType}\n\n`;
        csvContent += 'Age,lx,dx,qx,ex,Survival Probability (%)\n';

        for (let i = ageIndex; i < ages.length; i++) {
            const ageVal = ages[i];
            const lxVal = lx[i].toFixed(0);
            const dxVal = (dx ? dx[i] : 0).toFixed(0);
            const qxVal = (qx ? qx[i] : 0).toFixed(6);
            const exVal = (ex ? ex[i] : 0).toFixed(2);
            const survivalProb = ((lx[i] / baseLx) * 100).toFixed(2);

            csvContent += `${ageVal},${lxVal},${dxVal},${qxVal},${exVal},${survivalProb}\n`;
        }

        // Create blob and download
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);

        const filename = `life_table_${country}_${sex}_age${age}_${tableType}.csv`;
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    } catch (error) {
        showError('Download failed: ' + error.message);
        console.error(error);
    }
}

/**
 * Error handling
 */
function showError(message) {
    errorMsg.textContent = message;
    errorMsg.classList.add('show');
}

function clearError() {
    errorMsg.textContent = '';
    errorMsg.classList.remove('show');
}