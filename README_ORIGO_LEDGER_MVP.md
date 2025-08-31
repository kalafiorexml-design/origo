# ORIGO Ledger (MVP)

**Cel:** wystawianie dowodów pracy i biegłości — **OM (Origo Mastery)** i **OPC (Origo Practice Credits)** — z hashami artefaktów oraz podpisem (HMAC-SHA256, demo).

## Struktura
```
schemas/
  om_v1.json      # schema VC dla OM
  opc_v1.json     # schema dla nagrody OPC
scripts/
  origo_issue.py  # CLI do wystawiania credów
examples/
  example_artifact.txt
ledger/
  om1-<id>.credential.json  # wygenerowane VC (OM)
  om1-<id>.opc.json         # nagroda OPC
```

## Szybki start (lokalnie)
```bash
export ORIGO_SIGNING_SECRET="demo-secret-change-me"  # zmień w produkcji (Ed25519)
python3 scripts/origo_issue.py   --issuer "did:origo:foundation"   --subject "did:origo:user:alpha"   --om-level 1   --hours 4 --difficulty 1.2 --rarity 1.1   --quality 0.8 --impact 0.6 --reliability 0.9 --mentoring 0.2   --artifacts examples/example_artifact.txt   --secret "$ORIGO_SIGNING_SECRET"   --outdir ledger
```

Powstaną dwa pliki w `ledger/`: credential (OM) i award (OPC).

## Uwaga (bezpieczeństwo)
To **MVP demo** z podpisem HMAC. Docelowo: **Ed25519 + DID**, publiczny klucz w repo/kontrakcie.
