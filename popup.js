const toggle = document.getElementById('checkbox1');

chrome.storage.sync.get(['SiteBildirHatirlatici'], function(result) {
  if (result.SiteBildirHatirlatici === '1') {
    toggle.checked = true;
    
  } else {
    toggle.checked = false;
  }
});

toggle.addEventListener('change', function() {
  if (toggle.checked) {
    chrome.storage.sync.set({ SiteBildirHatirlatici: '1' }, function() {});
  } else {
    chrome.storage.sync.set({ SiteBildirHatirlatici: '0' });
  }
});
